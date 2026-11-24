/*!
 * Moksha Voyage — 3D Namaste Chatbot ("Sarthi")
 * Three.js + SVG + CSS + JavaScript  (koi build step nahi chahiye)
 *
 * Website par lagane ka tareeka — </body> se theek pehle yeh paste karein:
 *
 *   <script>
 *     window.MokshaChatbotConfig = {
 *       phone: '+91XXXXXXXXXX',     // Call button ke liye
 *       whatsapp: '91XXXXXXXXXX',   // WhatsApp number (country code ke saath, + ke bina)
 *       leadWebhook: ''             // (optional) naam/number yahan POST honge
 *     };
 *   </script>
 *   <script type="module" src="moksha-chatbot/moksha-chatbot.js"></script>
 *
 * moksha-chatbot.css isi folder me rakhein — script use khud load kar leta hai.
 */

/* ------------------------------------------------------------------ CONFIG */
const DEFAULTS = {
  botName: 'Sarthi',
  brandName: 'Moksha Voyage',
  bubbleText: 'Main aapki kya sahayata karun?',
  bubbleText2: 'Yatra plan karni hai? Main madad karungi 🙏',
  welcomeText: 'Namaste 🙏 Main **{bot}** hoon, {brand} ki yatra-sahayak.\nBatayiye, aaj main aapki kya sahayata karun?',
  phone: '',            // '+919876543210'
  whatsapp: '',         // '919876543210'
  email: '',            // 'info@example.com'
  leadWebhook: '',      // 'https://...'  (JSON POST: {name, phone, trip, page, time})
  apiUrl: '',           // (optional) apna AI/backend: POST {message, history} -> {reply, chips?}
  packages: [],         // ['Char Dham Yatra', {name:'Kashi Darshan', details:'...'}]
  position: 'right',    // 'right' | 'left'
  look: 'vector',       // 'vector' (cartoon outline) | 'soft'
  namasteOnOpen: false, // chat kholne par dobara namaste kare?
  namasteOncePerSession: false, // true = poori visit me sirf pehle page par namaste
  autoOpenDelay: 0,     // ms; 0 = khud se na khule
  rememberChat: true,   // page badalne par chat yaad rahe (same tab)
  threeUrl: 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js',
  cssUrl: '',           // khali = isi folder ki moksha-chatbot.css
  zIndex: 2147483000,
  onLead: null          // function(lead) { ... }
};
const CFG = Object.assign({}, DEFAULTS, (typeof window !== 'undefined' && window.MokshaChatbotConfig) || {});
if (!Array.isArray(CFG.packages)) CFG.packages = [];

/* ----------------------------------------------------------------- HELPERS */
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const damp = (c, t, k, dt) => lerp(c, t, 1 - Math.exp(-k * dt));
const wait = ms => new Promise(r => setTimeout(r, ms));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const fill = s => String(s).replace(/\{bot\}/g, CFG.botName).replace(/\{brand\}/g, CFG.brandName);

/* smooth (cubic Hermite) interpolation in a table of rows [x, c1, c2, ...] */
function interpTable(tab, x, col) {
  const n = tab.length;
  if (x <= tab[0][0]) return tab[0][col];
  if (x >= tab[n - 1][0]) return tab[n - 1][col];
  let i = 0;
  while (x > tab[i + 1][0]) i++;
  const x0 = tab[i][0], x1 = tab[i + 1][0], h = x1 - x0, t = (x - x0) / h;
  const p0 = tab[i][col], p1 = tab[i + 1][col];
  const m0 = i > 0 ? (tab[i + 1][col] - tab[i - 1][col]) / (tab[i + 1][0] - tab[i - 1][0]) : (p1 - p0) / h;
  const m1 = i < n - 2 ? (tab[i + 2][col] - tab[i][col]) / (tab[i + 2][0] - tab[i][0]) : (p1 - p0) / h;
  const t2 = t * t, t3 = t2 * t;
  return (2 * t3 - 3 * t2 + 1) * p0 + (t3 - 2 * t2 + t) * h * m0 + (-2 * t3 + 3 * t2) * p1 + (t3 - t2) * h * m1;
}

/* ------------------------------------------------------------------- ICONS */
const ICON = {
  om: '<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="20" fill="#fff4e2" stroke="#f08a24" stroke-width="2.6"/><text x="22" y="30.5" text-anchor="middle" font-size="23" font-weight="700" fill="#e2700f" font-family="\'Noto Sans Devanagari\',\'Nirmala UI\',Mangal,\'Kohinoor Devanagari\',\'Devanagari Sangam MN\',sans-serif">ॐ</text></svg>',
  send: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.4 20.4 21 12 3.4 3.6v6.6L15 12 3.4 13.8z"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>',
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9.5l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  restart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4.5v4.2h4.2" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5A9.5 9.5 0 0 0 3.8 16.8L2.5 21.5l4.8-1.3A9.5 9.5 0 1 0 12 2.5zm0 17.2a7.7 7.7 0 0 1-3.9-1.07l-.28-.17-2.85.77.77-2.78-.18-.29A7.7 7.7 0 1 1 12 19.7zm4.2-5.75c-.23-.12-1.36-.67-1.57-.75s-.36-.11-.52.12-.6.75-.73.9-.27.17-.5.06a6.3 6.3 0 0 1-3.1-2.72c-.24-.4.24-.37.67-1.24a.43.43 0 0 0-.02-.4c-.06-.12-.52-1.25-.71-1.71s-.38-.39-.52-.4h-.45a.86.86 0 0 0-.62.29 2.6 2.6 0 0 0-.81 1.94 4.5 4.5 0 0 0 .95 2.4 10.4 10.4 0 0 0 4 3.52c1.48.64 2.06.7 2.8.59a2.4 2.4 0 0 0 1.57-1.1 1.95 1.95 0 0 0 .14-1.1c-.06-.1-.22-.16-.45-.27z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.2 7v10h15.6V7z"/></svg>'
};

/* ==================================================================== BOOT */
boot();

async function boot() {
  if (window.__mokshaChatbot) return;
  window.__mokshaChatbot = true;
  if (document.readyState === 'loading') await new Promise(r => document.addEventListener('DOMContentLoaded', r, { once: true }));
  await loadCss();

  const ui = createUI();
  let avatar = null;
  try {
    const THREE = await import(/* @vite-ignore */ CFG.threeUrl);
    avatar = createAvatar(THREE, ui.canvas, { look: CFG.look, brandText: CFG.brandName, side: CFG.position });
    if (CFG.debug) window.__mvcAvatar = avatar;
  } catch (err) {
    console.warn('[MokshaChatbot] 3D avatar load nahi ho paya, simple icon dikh raha hai.', err);
    ui.root.classList.add('mvc-no3d');
  }
  ui.root.classList.add('mvc-ready');
  createBot(ui, avatar);
}

function loadCss() {
  return new Promise(resolve => {
    const has = [...document.querySelectorAll('link[rel="stylesheet"]')].some(l => /moksha-chatbot\.css/.test(l.href));
    if (has) return resolve();
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = CFG.cssUrl || new URL('./moksha-chatbot.css', import.meta.url).href;
    link.onload = () => resolve();
    link.onerror = () => { console.warn('[MokshaChatbot] CSS nahi mili:', link.href); resolve(); };
    document.head.appendChild(link);
    setTimeout(resolve, 3000);
  });
}

/* ===================================================================== UI */
function createUI() {
  const root = document.createElement('div');
  root.className = 'mvc-root mvc-' + (CFG.position === 'left' ? 'left' : 'right');
  root.style.zIndex = CFG.zIndex;
  root.innerHTML = `
    <div class="mvc-bubble" role="button" tabindex="0" aria-label="${esc(CFG.bubbleText)}">
      <span class="mvc-om">${ICON.om}</span>
      <span class="mvc-bubble-text"><span class="mvc-typed"></span><span class="mvc-ghost" aria-hidden="true"></span></span>
      <button type="button" class="mvc-bubble-x" aria-label="Band karein">${ICON.close}</button>
    </div>
    <div class="mvc-avatar">
      <canvas class="mvc-canvas" aria-hidden="true"></canvas>
      <div class="mvc-fallback" aria-hidden="true">${ICON.om}</div>
      <div class="mvc-hit" role="button" tabindex="0" aria-label="${esc(CFG.botName)} se chat karein"></div>
      <div class="mvc-name" role="button" tabindex="-1"><i class="mvc-dot"></i>${esc(CFG.botName)}</div>
    </div>
    <section class="mvc-panel" role="dialog" aria-label="${esc(CFG.botName)} chat" aria-hidden="true">
      <header class="mvc-head">
        <span class="mvc-head-om">${ICON.om}</span>
        <div class="mvc-head-txt">
          <div class="mvc-head-title">${esc(CFG.botName)} <span>· ${esc(CFG.brandName)}</span></div>
          <div class="mvc-head-sub"><i class="mvc-dot"></i> Online · Aapki yatra-sahayak</div>
        </div>
        <button type="button" class="mvc-ibtn mvc-restart" title="Nayi baat shuru karein" aria-label="Chat dobara shuru karein">${ICON.restart}</button>
        <button type="button" class="mvc-ibtn mvc-close" title="Band karein" aria-label="Chat band karein">${ICON.down}</button>
      </header>
      <div class="mvc-body" aria-live="polite"></div>
      <div class="mvc-chips"></div>
      <form class="mvc-form" autocomplete="off">
        <input class="mvc-input" type="text" maxlength="500" placeholder="Apna sawal yahan likhein..." aria-label="Apna sawal likhein" />
        <button class="mvc-send" type="submit" aria-label="Bhejein">${ICON.send}</button>
      </form>
      <div class="mvc-foot">🙏 ${esc(CFG.brandName)} · Virtual Assistant</div>
    </section>`;
  document.body.appendChild(root);
  const $ = s => root.querySelector(s);
  return {
    root,
    canvas: $('.mvc-canvas'),
    bubble: $('.mvc-bubble'), typed: $('.mvc-typed'), ghost: $('.mvc-ghost'), bubbleX: $('.mvc-bubble-x'),
    hit: $('.mvc-hit'), name: $('.mvc-name'),
    panel: $('.mvc-panel'), body: $('.mvc-body'), chips: $('.mvc-chips'),
    form: $('.mvc-form'), input: $('.mvc-input'),
    closeBtn: $('.mvc-close'), restartBtn: $('.mvc-restart')
  };
}

/* ==================================================================== BOT */
function createBot(ui, avatar) {
  const STORE = 'mvc-chat-v1';
  const S = { history: [], flow: null, lead: {}, pendingYes: null, open: false, busy: false, queue: [], greeted: false };
  const isRight = CFG.position !== 'left';
  const panelYaw = isRight ? -0.5 : 0.5;
  const mqMobile = window.matchMedia('(max-width: 640px)');

  /* ---------- restore ---------- */
  if (CFG.rememberChat) {
    try { const saved = JSON.parse(sessionStorage.getItem(STORE) || 'null'); if (saved && Array.isArray(saved.h)) { S.history = saved.h.slice(-60); S.greeted = S.history.length > 0; } } catch (e) { /* ignore */ }
  }
  const save = () => { if (!CFG.rememberChat) return; try { sessionStorage.setItem(STORE, JSON.stringify({ h: S.history.slice(-60) })); } catch (e) { /* ignore */ } };
  S.history.forEach(m => renderMsg(m, false));

  /* ---------- avatar intro: namaste -> bubble ---------- */
  let typeTimer = 0;
  function showBubble(text) {
    if (S.open) return;
    const chars = Array.from(text);
    ui.typed.textContent = '';
    ui.ghost.textContent = text;
    ui.bubble.setAttribute('aria-label', text);
    ui.bubble.classList.add('mvc-show');
    clearInterval(typeTimer);
    let i = 0;
    if (avatar) avatar.talk(chars.length * 40 + 250);
    typeTimer = setInterval(() => {
      i++;
      ui.typed.textContent = chars.slice(0, i).join('');
      ui.ghost.textContent = chars.slice(i).join('');
      if (i >= chars.length) clearInterval(typeTimer);
    }, 38);
  }
  const hideBubble = () => ui.bubble.classList.remove('mvc-show');
  let bubbleDismissed = false;
  try { bubbleDismissed = sessionStorage.getItem('mvc-bubble-x') === '1'; } catch (e) { /* ignore */ }

  (async () => {
    await wait(500);
    let greetedBefore = false;
    try { greetedBefore = sessionStorage.getItem('mvc-namaste') === '1'; sessionStorage.setItem('mvc-namaste', '1'); } catch (e) { /* ignore */ }
    if (avatar && !(CFG.namasteOncePerSession && greetedBefore)) await avatar.namaste();
    await wait(250);
    if (!bubbleDismissed && !S.open) showBubble(CFG.bubbleText);
    await wait(22000);
    if (!bubbleDismissed && !S.open && !S.history.length && CFG.bubbleText2) {
      hideBubble(); await wait(450);
      if (avatar) avatar.nod();
      showBubble(CFG.bubbleText2);
    }
  })();
  if (CFG.autoOpenDelay > 0) setTimeout(() => { if (!S.open && !S.history.length) openChat(); }, CFG.autoOpenDelay);

  /* ---------- open / close ---------- */
  function openChat() {
    if (S.open) return;
    S.open = true;
    hideBubble();
    ui.root.classList.add('mvc-open');
    ui.panel.setAttribute('aria-hidden', 'false');
    if (avatar) {
      if (CFG.namasteOnOpen) avatar.namaste(); else avatar.nod();
      avatar.focus(panelYaw, 0.05, 2600);
      if (mqMobile.matches) avatar.setPaused(true);
    }
    if (!S.greeted) { S.greeted = true; botSay({ text: fill(CFG.welcomeText), chips: mainChips() }, 700); }
    else if (!ui.chips.children.length && !S.flow) setChips(mainChips());
    if (!matchMedia('(pointer: coarse)').matches) setTimeout(() => ui.input.focus({ preventScroll: true }), 350);
    scrollDown();
  }
  function closeChat() {
    if (!S.open) return;
    S.open = false;
    ui.root.classList.remove('mvc-open');
    ui.panel.setAttribute('aria-hidden', 'true');
    if (avatar) { avatar.setPaused(false); avatar.nod(); }
  }
  const toggle = () => (S.open ? closeChat() : openChat());

  ui.hit.addEventListener('click', toggle);
  ui.name.addEventListener('click', toggle);
  ui.hit.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
  ui.bubble.addEventListener('click', e => { if (!e.target.closest('.mvc-bubble-x')) openChat(); });
  ui.bubble.addEventListener('keydown', e => { if (e.key === 'Enter') openChat(); });
  ui.bubbleX.addEventListener('click', e => {
    e.stopPropagation(); hideBubble(); bubbleDismissed = true;
    try { sessionStorage.setItem('mvc-bubble-x', '1'); } catch (err) { /* ignore */ }
  });
  ui.closeBtn.addEventListener('click', closeChat);
  ui.restartBtn.addEventListener('click', () => {
    S.history = []; S.flow = null; S.pendingYes = null; S.queue.length = 0; save();
    ui.body.innerHTML = ''; setChips([]);
    botSay({ text: fill(CFG.welcomeText), chips: mainChips() }, 500);
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && S.open) closeChat(); });
  ui.form.addEventListener('submit', e => {
    e.preventDefault();
    const t = ui.input.value.trim();
    if (!t) return;
    ui.input.value = '';
    handleUser(t);
  });

  /* avatar follows the mouse / finger + reacts to hover */
  if (avatar) {
    window.addEventListener('pointermove', e => avatar.pointer(e.clientX, e.clientY), { passive: true });
    window.addEventListener('pointerdown', e => avatar.pointer(e.clientX, e.clientY), { passive: true });
    ui.hit.addEventListener('pointerenter', () => avatar.excite(true));
    ui.hit.addEventListener('pointerleave', () => avatar.excite(false));
    ui.input.addEventListener('input', () => avatar.focus(panelYaw * 0.8, 0.22, 1200));
  }

  /* ---------- rendering ---------- */
  function fmt(t) { return esc(t).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>'); }
  function renderMsg(m, animate = true) {
    const row = document.createElement('div');
    row.className = 'mvc-msg ' + (m.role === 'user' ? 'mvc-user' : 'mvc-bot');
    if (!animate) row.style.animation = 'none';
    let html = `<div class="mvc-b">${fmt(m.text)}`;
    if (m.actions && m.actions.length) {
      html += '<div class="mvc-actions">' + m.actions.map(a =>
        `<a class="mvc-act" href="${esc(a.href)}"${a.ext ? ' target="_blank" rel="noopener"' : ''}>${ICON[a.icon] || ''}<span>${esc(a.label)}</span></a>`).join('') + '</div>';
    }
    html += '</div>';
    row.innerHTML = html;
    ui.body.appendChild(row);
    scrollDown();
  }
  function scrollDown() { requestAnimationFrame(() => { ui.body.scrollTop = ui.body.scrollHeight; }); }
  function addMsg(role, text, actions) {
    const m = { role, text, actions: actions || null };
    S.history.push(m); save(); renderMsg(m);
  }
  function setChips(list) {
    ui.chips.innerHTML = '';
    (list || []).forEach(label => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'mvc-chip'; b.textContent = label;
      b.addEventListener('click', () => handleUser(label, true));
      ui.chips.appendChild(b);
    });
  }
  let typingEl = null;
  function showTyping() {
    if (typingEl) return;
    typingEl = document.createElement('div');
    typingEl.className = 'mvc-msg mvc-bot mvc-typing';
    typingEl.innerHTML = '<div class="mvc-b"><i></i><i></i><i></i></div>';
    ui.body.appendChild(typingEl); scrollDown();
  }
  function hideTyping() { if (typingEl) { typingEl.remove(); typingEl = null; } }

  function botSay(msg, delay) {
    if (!msg) return;
    S.queue.push({ msg, delay });
    if (!S.busy) pump();
  }
  async function pump() {
    S.busy = true;
    while (S.queue.length) {
      const { msg, delay } = S.queue.shift();
      showTyping();
      if (avatar) avatar.focus(panelYaw, 0.06, 1600);
      await wait(delay || clamp(450 + msg.text.length * 9, 650, 1500));
      hideTyping();
      addMsg('bot', msg.text, msg.actions);
      setChips(msg.chips || []);
      if (avatar) { avatar.talk(clamp(msg.text.length * 38, 900, 4200)); avatar.focus(0, 0, 1); }
    }
    S.busy = false;
  }

  /* ---------- understanding ---------- */
  const norm = s => ' ' + String(s).toLowerCase().replace(/[^\p{L}\p{M}\p{N}\s₹]/gu, ' ').replace(/\s+/g, ' ').trim() + ' ';
  const hasKw = (n, kw) => {
    if (/[ऀ-ॿ]/.test(kw)) return n.includes(kw.replace('*', ''));
    if (kw.endsWith('*')) return n.includes(' ' + kw.slice(0, -1));
    return n.includes(' ' + kw + ' ');
  };
  const INTENTS = {
    callback: ['call back', 'callback', 'call me', 'mujhe call', 'call kar*', 'call kijiye', 'call karo', 'call chahiye', 'contact me', 'sampark kar*', 'baat karni', 'baat karna', 'baat kara*', 'talk to', 'agent', 'human', 'executive', 'कॉल', 'बात कर*'],
    booking: ['book*', 'reserv*', 'seat*', 'confirm*', 'ticket*', 'बुक*', 'टिकट'],
    price: ['price*', 'cost*', 'kitna', 'kitne', 'kitni', 'kharch*', 'rate*', 'budget', 'fees', 'fee', 'fare', 'charge*', 'paisa', 'paise', '₹', 'rs', 'rupee*', 'rupay*', 'कीमत', 'खर्च*', 'कितना', 'कितने', 'रेट', 'बजट'],
    cancel: ['cancel*', 'refund*', 'reschedul*', 'postpone*', 'date change', 'रद्द', 'कैंसल', 'रिफंड'],
    payment: ['payment*', 'pay', 'upi', 'emi', 'card', 'advance', 'installment*', 'भुगतान', 'पेमेंट'],
    hotel: ['hotel*', 'stay', 'room*', 'dharamshala', 'dharmshala', 'accommodation', 'rukna', 'rukne', 'होटल', 'धर्मशाला'],
    transport: ['bus', 'train*', 'flight*', 'cab', 'taxi', 'car', 'tempo', 'traveller', 'transport*', 'pickup', 'pick up', 'helicopter', 'heli', 'बस', 'ट्रेन', 'फ्लाइट', 'हेलीकॉप्टर'],
    packages: ['package*', 'tour*', 'yatra*', 'yaatra*', 'trip*', 'plan*', 'itinerar*', 'destination*', 'darshan', 'tirth*', 'teerth*', 'pilgrim*', 'dham', 'jyotirling*', 'spiritual', 'holiday*', 'यात्रा', 'पैकेज', 'दर्शन', 'टूर', 'धाम', 'तीर्थ'],
    whatsapp: ['whatsapp', 'whats app', 'watsapp', 'whatsap', 'व्हाट्सएप'],
    contact: ['contact*', 'phone', 'number', 'mobile', 'helpline', 'support', 'email', 'mail', 'office', 'address', 'location', 'संपर्क', 'सम्पर्क', 'फोन', 'नंबर', 'पता'],
    who: ['who are you', 'kaun ho', 'aap kaun', 'tum kaun', 'your name', 'tumhara naam', 'aapka naam', 'bot', 'robot', 'आप कौन'],
    thanks: ['thank*', 'thx', 'dhanyavad*', 'dhanyawad*', 'dhanyvad*', 'shukriya', 'shukria', 'धन्यवाद', 'शुक्रिया'],
    bye: ['bye', 'byee', 'alvida', 'tata', 'see you', 'good night', 'अलविदा'],
    no: ['nahi', 'nahin', 'no', 'nope', 'mat', 'rehne do', 'rehne dijiye', 'abhi nahi', 'नहीं', 'रहने दो'],
    yes: ['haan', 'han', 'ha', 'yes', 'ok', 'okay', 'okh', 'theek', 'thik', 'zaroor', 'jarur', 'हाँ', 'हां', 'ठीक'],
    greet: ['namaste', 'namaskar', 'namskar', 'hello', 'hi', 'hii', 'hiii', 'hey', 'helo', 'pranam', 'pranaam', 'ram ram', 'radhe radhe', 'jai shri*', 'jai shree*', 'hare krishna', 'good morning', 'good evening', 'good afternoon', 'नमस्ते', 'नमस्कार', 'प्रणाम', 'राम राम', 'राधे राधे', 'जय श्री']
  };
  const is = (n, id) => INTENTS[id].some(kw => hasKw(n, kw));
  const PLACES = [
    ['char dham', 'Char Dham'], ['chardham', 'Char Dham'], ['do dham', 'Do Dham'], ['kedarnath', 'Kedarnath'], ['badrinath', 'Badrinath'],
    ['gangotri', 'Gangotri'], ['yamunotri', 'Yamunotri'], ['kashi', 'Kashi'], ['varanasi', 'Varanasi'], ['banaras', 'Banaras'],
    ['ayodhya', 'Ayodhya'], ['vrindavan', 'Vrindavan'], ['mathura', 'Mathura'], ['haridwar', 'Haridwar'], ['rishikesh', 'Rishikesh'],
    ['jagannath', 'Jagannath Puri'], ['puri', 'Puri'], ['dwarka', 'Dwarka'], ['somnath', 'Somnath'], ['ujjain', 'Ujjain'],
    ['mahakal', 'Mahakal, Ujjain'], ['omkareshwar', 'Omkareshwar'], ['tirupati', 'Tirupati'], ['vaishno devi', 'Vaishno Devi'], ['vaishno', 'Vaishno Devi'],
    ['amarnath', 'Amarnath'], ['rameshwaram', 'Rameshwaram'], ['shirdi', 'Shirdi'], ['kailash', 'Kailash Mansarovar'], ['mansarovar', 'Kailash Mansarovar'],
    ['pashupatinath', 'Pashupatinath'], ['nepal', 'Nepal'], ['muktinath', 'Muktinath'], ['bodh gaya', 'Bodh Gaya'], ['gaya', 'Gaya'], ['prayagraj', 'Prayagraj'],
    ['kumbh', 'Kumbh'], ['amritsar', 'Amritsar'], ['golden temple', 'Golden Temple'], ['jyotirling', 'Jyotirlinga'], ['kamakhya', 'Kamakhya'],
    ['sabarimala', 'Sabarimala'], ['madurai', 'Madurai'], ['pushkar', 'Pushkar'], ['kanyakumari', 'Kanyakumari'], ['hemkund', 'Hemkund Sahib'],
    ['केदारनाथ', 'Kedarnath'], ['बद्रीनाथ', 'Badrinath'], ['काशी', 'Kashi'], ['वाराणसी', 'Varanasi'], ['अयोध्या', 'Ayodhya'], ['वृंदावन', 'Vrindavan'],
    ['हरिद्वार', 'Haridwar'], ['ऋषिकेश', 'Rishikesh'], ['चार धाम', 'Char Dham'], ['उज्जैन', 'Ujjain'], ['द्वारका', 'Dwarka'], ['तिरुपति', 'Tirupati'], ['वैष्णो', 'Vaishno Devi']
  ];
  const findPlace = n => { for (const [k, v] of PLACES) if (hasKw(n, k) || (!/[ऀ-ॿ]/.test(k) && hasKw(n, k + '*'))) return v; return null; };
  const pkgName = p => (typeof p === 'string' ? p : p && p.name) || '';
  const findPackage = text => CFG.packages.find(p => pkgName(p).toLowerCase() === text.trim().toLowerCase());

  const waLink = msg => `https://wa.me/${String(CFG.whatsapp).replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
  function contactActions() {
    const a = [];
    if (CFG.phone) a.push({ label: 'Call karein', href: 'tel:' + String(CFG.phone).replace(/[^\d+]/g, ''), icon: 'phone' });
    if (CFG.whatsapp) a.push({ label: 'WhatsApp', href: waLink('Namaste 🙏 Mujhe yatra ke baare mein jaankari chahiye.'), icon: 'chat', ext: true });
    if (CFG.email) a.push({ label: 'Email', href: 'mailto:' + CFG.email, icon: 'mail' });
    return a;
  }
  const CHIP = { pkg: '🕉️ Yatra Packages', price: '💰 Kharcha / Price', book: '📅 Booking', call: '📞 Call back chahiye', wa: '💬 WhatsApp' };
  function mainChips() { return [CHIP.pkg, CHIP.price, CHIP.book, CHIP.call].concat(CFG.whatsapp ? [CHIP.wa] : []); }

  function reply(n, raw) {
    const pkg = findPackage(raw);
    if (pkg) {
      const name = pkgName(pkg);
      return { text: `**${name}** 🙏\n${(typeof pkg === 'object' && pkg.details) || 'Is package ki dates, kharcha aur poori jaankari hamari team aapko degi.'}\nKya main aapke liye call back arrange karun?`, chips: [CHIP.call, CHIP.price].concat(CFG.whatsapp ? [CHIP.wa] : []), yes: 'callback' };
    }
    if (is(n, 'callback')) return startLead('Zaroor! 🙏 Hamari team aapko call karegi.');
    const place = findPlace(n);
    if (place && is(n, 'booking')) return startLead(`**${place} yatra** ki booking ke liye main aapki kuch details le leti hoon 🙏`);
    if (place && is(n, 'price')) {
      return {
        text: `**${place} yatra** ka kharcha in baaton par depend karta hai:\n• Kitne log aur kitne din\n• Hotel / rukne ka type\n• Travel ka tareeka (bus, train, cab ya flight)\nApna number chhod dijiye — hamari team aapko ${place} ka sahi quote degi 🙏`,
        chips: [CHIP.call].concat(CFG.whatsapp ? [CHIP.wa] : []).concat([CHIP.pkg])
      };
    }
    if (place && !is(n, 'cancel')) {
      return {
        text: `**${place} yatra** — bahut shubh vichaar! 🙏\nAap mujhe batayein:\n• Kitne log yatra karenge?\n• Kab jaana chahte hain?\n• Kahan se shuru karenge?\nYa apna number chhod dijiye — hamari team aapko ${place} ke liye poori jaankari aur sahi package batayegi.`,
        chips: [CHIP.call, CHIP.price].concat(CFG.whatsapp ? [CHIP.wa] : [])
      };
    }
    if (is(n, 'booking')) return startLead('Booking ke liye main aapki kuch details le leti hoon 🙏');
    if (is(n, 'price')) return { text: 'Yatra ka kharcha in baaton par depend karta hai:\n• Destination aur dino ki sankhya\n• Kitne log yatra kar rahe hain\n• Hotel aur travel ka type\nApni details batayein ya call back lijiye — hamari team aapko sahi quote degi 🙏', chips: [CHIP.call, CHIP.pkg].concat(CFG.whatsapp ? [CHIP.wa] : []) };
    if (is(n, 'cancel')) return { text: 'Cancellation, refund ya date change ke liye hamari support team aapki madad karegi. Kripya apni booking details ke saath sampark karein 🙏', actions: contactActions(), chips: [CHIP.call] };
    if (is(n, 'payment')) return { text: 'Payment ke tareeke aur advance ki jaankari hamari team booking ke samay de degi. Kya main aapke liye call back arrange karun?', chips: ['Haan, call back', CHIP.pkg], yes: 'callback' };
    if (is(n, 'hotel')) return { text: 'Yatra ke dauraan rukne ka intezaam (hotel / dharamshala) aapke budget ke hisaab se plan kiya ja sakta hai 🙏\nAap kahan aur kab jaana chahte hain?', chips: [CHIP.call, CHIP.pkg] };
    if (is(n, 'transport')) return { text: 'Travel (bus, train, cab ya flight) ki planning aapki yatra aur logon ki sankhya ke hisaab se hoti hai 🙏\nAap kahan se kahan jaana chahte hain?', chips: [CHIP.call, CHIP.pkg] };
    if (is(n, 'packages')) {
      if (CFG.packages.length) return { text: 'Hamare kuch lokpriya yatra packages 🙏\nKisi bhi package par click karein ya apni destination likhein.', chips: CFG.packages.slice(0, 8).map(pkgName).concat([CHIP.call]) };
      return { text: `${CFG.brandName} aapki yatra ko aasaan aur yaadgaar banane mein madad karta hai 🙏\nAap kahan jaana chahte hain? Destination ka naam likhiye — jaise Kedarnath, Kashi, Ayodhya, Vrindavan...`, chips: ['Char Dham', 'Kashi', 'Ayodhya', 'Vrindavan', CHIP.call] };
    }
    if (is(n, 'whatsapp')) {
      if (CFG.whatsapp) return { text: 'Neeche button dabaiye aur seedhe WhatsApp par baat kijiye 🙏', actions: contactActions().filter(a => a.icon === 'chat') };
      return startLead('WhatsApp number abhi yahan set nahi hai. Aap apna number chhod dijiye, hamari team aapse sampark karegi 🙏');
    }
    if (is(n, 'contact')) {
      const acts = contactActions();
      if (acts.length) return { text: 'Hamari team se seedhe sampark karein 🙏', actions: acts, chips: [CHIP.call] };
      return startLead('Aap apna naam aur number chhod dijiye, hamari team aapse jald sampark karegi 🙏');
    }
    if (is(n, 'who')) return { text: `Main **${CFG.botName}** hoon — ${CFG.brandName} ki virtual yatra-sahayak 🙏\nMain packages, kharche aur booking se jude sawalon mein aapki madad karti hoon.`, chips: mainChips() };
    if (is(n, 'thanks')) return { text: 'Aapka bahut-bahut dhanyavaad! 🙏 Aapki yatra mangalmay ho.\nKuch aur poochna ho to main yahin hoon.', chips: mainChips() };
    if (is(n, 'bye')) return { text: 'Dhanyavaad! 🙏 Phir milenge. Aapki yatra shubh ho!', chips: [] };
    if (S.pendingYes && is(n, 'yes')) { const p = S.pendingYes; S.pendingYes = null; if (p === 'callback') return startLead(); }
    if (is(n, 'no')) return { text: 'Koi baat nahi 🙏 Aur kisi cheez mein madad chahiye to bataiye.', chips: mainChips() };
    if (is(n, 'greet')) return { text: 'Namaste 🙏 Batayiye, main aapki kya sahayata karun?\nAap yatra packages, kharcha ya booking ke baare mein pooch sakte hain.', chips: mainChips() };
    return { text: 'Maaf kijiye, main poori tarah samajh nahi paayi 🙏\nAap neeche diye options mein se chun sakte hain, ya apna number chhod dijiye — hamari team aapse baat karegi.', chips: mainChips() };
  }

  /* ---------- lead capture (naam -> number -> yatra) ---------- */
  function startLead(intro) {
    S.flow = 'name'; S.lead = {};
    return { text: (intro ? intro + '\n' : '') + 'Kripya apna **shubh naam** bataiye.', chips: ['Rehne dijiye'] };
  }
  function handleLead(text) {
    const n = norm(text);
    if (/ (rehne do|rehne dijiye|cancel|chhodo|abhi nahi) /.test(n) || text === 'Rehne dijiye') {
      S.flow = null;
      return { text: 'Theek hai 🙏 Jab bhi zaroorat ho, main yahin hoon.', chips: mainChips() };
    }
    if (S.flow === 'name') {
      const name = text.replace(/[^\p{L}\p{M}\s.'-]/gu, '').trim().slice(0, 50);
      if (name.length < 2) return { text: 'Kripya apna naam likhiye 🙏', chips: ['Rehne dijiye'] };
      S.lead.name = name.replace(/\b\p{L}/gu, c => c.toUpperCase());
      S.flow = 'phone';
      return { text: `Dhanyavaad **${S.lead.name}** ji 🙏\nAapka **mobile number** kya hai?`, chips: ['Rehne dijiye'] };
    }
    if (S.flow === 'phone') {
      const d = text.replace(/[^\d+]/g, '');
      const ok = /^(\+?91)?[6-9]\d{9}$/.test(d) || /^\+\d{10,14}$/.test(d);
      if (!ok) return { text: 'Kripya sahi 10-digit mobile number likhiye (jaise 98XXXXXXXX) 🙏', chips: ['Rehne dijiye'] };
      S.lead.phone = d;
      S.flow = 'trip';
      return { text: 'Aap **kahan aur kab** yatra karna chahte hain?\n(Jaise: Kedarnath, May, 4 log)', chips: ['Abhi decide nahi kiya'] };
    }
    if (S.flow === 'trip') {
      S.lead.trip = text.slice(0, 300);
      S.flow = null;
      finishLead();
      return null;
    }
    S.flow = null;
    return null;
  }
  async function finishLead() {
    const lead = { name: S.lead.name, phone: S.lead.phone, trip: S.lead.trip, page: location.href, time: new Date().toISOString(), source: 'moksha-chatbot' };
    let delivered = false;
    try { window.dispatchEvent(new CustomEvent('mokshachat:lead', { detail: lead })); } catch (e) { /* ignore */ }
    if (typeof CFG.onLead === 'function') { try { await CFG.onLead(lead); delivered = true; } catch (e) { console.warn('[MokshaChatbot] onLead error', e); } }
    if (CFG.leadWebhook) {
      try {
        const r = await fetch(CFG.leadWebhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
        delivered = delivered || r.ok;
      } catch (e) { console.warn('[MokshaChatbot] leadWebhook error', e); }
    }
    if (!delivered && !CFG.whatsapp) console.warn('[MokshaChatbot] Lead kahin save nahi hua — config me leadWebhook / onLead / whatsapp set karein.', lead);
    const waText = `Namaste 🙏\nNaam: ${lead.name}\nMobile: ${lead.phone}\nYatra: ${lead.trip}`;
    const actions = CFG.whatsapp ? [{ label: 'WhatsApp par bhejein', href: waLink(waText), icon: 'chat', ext: true }] : [];
    if (!delivered && CFG.whatsapp) {
      botSay({ text: `Shukriya **${lead.name}** ji! 🙏\nNeeche button dabakar apni details WhatsApp par bhej dijiye — hamari team turant aapse sampark karegi.`, actions, chips: [CHIP.pkg, CHIP.price] });
    } else {
      botSay({ text: `Shukriya **${lead.name}** ji! 🙏\nAapki request mil gayi hai. Hamari team jald hi **${lead.phone}** par aapse sampark karegi.`, actions, chips: [CHIP.pkg, CHIP.price] });
    }
  }

  /* ---------- user message ---------- */
  async function handleUser(text, fromChip = false) {
    text = String(text).trim();
    if (!text) return;
    if (!S.open) openChat();
    addMsg('user', text);
    setChips([]);
    if (avatar) avatar.focus(panelYaw, 0.12, 900);
    let r = null;
    if (S.flow && !(fromChip && text !== 'Rehne dijiye' && text !== 'Abhi decide nahi kiya')) {
      r = handleLead(text);
    } else {
      S.flow = null;
      const n = norm(text);
      if (CFG.apiUrl && !fromChip) r = await askApi(text);
      if (!r) r = reply(n, text);
    }
    if (r) { S.pendingYes = r.yes || null; botSay(r); }
  }
  async function askApi(text) {
    try {
      showTyping();
      const res = await fetch(CFG.apiUrl, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: S.history.slice(-12).map(m => ({ role: m.role, text: m.text })), page: location.href })
      });
      const data = await res.json();
      hideTyping();
      const t = data.reply || data.message || data.text;
      return t ? { text: String(t), chips: Array.isArray(data.chips) ? data.chips : mainChips() } : null;
    } catch (e) {
      hideTyping();
      console.warn('[MokshaChatbot] apiUrl error, local jawab de rahi hoon.', e);
      return null;
    }
  }

  /* ---------- public API ---------- */
  window.MokshaChatbot = {
    open: openChat, close: closeChat, toggle,
    namaste: () => avatar && avatar.namaste(),
    say: text => botSay({ text: String(text), chips: [] }, 300),
    ask: text => handleUser(text)
  };
}

/* ================================================================= AVATAR */
function createAvatar(THREE, canvas, options = {}) {
  const V3 = THREE.Vector3;
  const DEG = Math.PI / 180;
  const vector = options.look !== 'soft';
  const brandText = options.brandText || 'Moksha Voyage';

  /* ---------- renderer & camera ---------- */
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(20, 0.75, 0.1, 20);
  const AIM = new V3(0, 1.372, 0);
  camera.position.set(0, 1.44, 2.62);
  camera.lookAt(AIM);
  camera.updateMatrixWorld(true);

  /* ---------- "vector" toon shader (flat 2-tone + outline) ---------- */
  const U = {
    light: { value: new V3(0.34, 0.5, 0.8).normalize().transformDirection(camera.matrixWorldInverse) },
    soft: { value: vector ? 0.03 : 0.55 },
    thresh: { value: vector ? 0.1 : -0.05 },
    outline: { value: 0.0032 }
  };
  const VS = `
    uniform float uOutline;
    varying vec3 vN; varying vec2 vUv; varying vec3 vV;
    void main() {
      vUv = uv;
      vec3 n = normalize(normalMatrix * normal);
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      mv.xyz += n * uOutline;
      vN = n; vV = -mv.xyz;
      gl_Position = projectionMatrix * mv;
    }`;
  const FS = `
    uniform vec3 uColor; uniform vec3 uShade; uniform vec3 uLight; uniform vec3 uOutlineColor;
    uniform float uSoft; uniform float uThresh; uniform float uRim; uniform float uIsOutline;
    uniform float uHasMap; uniform float uAlphaTest; uniform float uOpacity; uniform float uBias;
    uniform sampler2D uMap;
    varying vec3 vN; varying vec2 vUv; varying vec3 vV;
    void main() {
      vec4 tx = vec4(1.0);
      if (uHasMap > 0.5) tx = texture2D(uMap, vUv);
      if (tx.a < max(uAlphaTest, 0.004)) discard;
      if (uIsOutline > 0.5) { gl_FragColor = vec4(uOutlineColor, 1.0); return; }
      vec3 n = normalize(vN);
      if (!gl_FrontFacing) n = -n;
      float d = dot(n, uLight);
      float lit = smoothstep(uThresh + uBias - uSoft, uThresh + uBias + uSoft, d);
      vec3 col = tx.rgb * mix(uShade, uColor, lit);
      float fres = 1.0 - clamp(dot(n, normalize(vV)), 0.0, 1.0);
      col += uRim * pow(fres, 3.0) * (0.35 + 0.65 * lit) * vec3(1.0, 0.96, 0.9);
      gl_FragColor = vec4(col, tx.a * uOpacity);
    }`;
  const hex = h => { const n = parseInt(h.slice(1), 16); return new V3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255); };
  const tint = (lit, shade) => { const a = hex(lit), b = hex(shade); return new V3(b.x / a.x, b.y / a.y, b.z / a.z); };

  function material(o = {}) {
    const color = o.color ? hex(o.color) : new V3(1, 1, 1);
    const shade = o.shade instanceof V3 ? o.shade : (o.shade ? hex(o.shade) : color.clone().multiplyScalar(0.8));
    const m = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: color }, uShade: { value: shade }, uLight: U.light, uSoft: U.soft, uThresh: U.thresh,
        uOutline: { value: 0 }, uIsOutline: { value: 0 }, uOutlineColor: { value: new V3() }, uRim: { value: o.rim ?? 0.1 },
        uHasMap: { value: o.map ? 1 : 0 }, uMap: { value: o.map || null }, uAlphaTest: { value: o.alphaTest ?? 0 }, uOpacity: { value: 1 },
        uBias: { value: o.bias ?? 0 }
      },
      vertexShader: VS, fragmentShader: FS,
      side: o.double ? THREE.DoubleSide : THREE.FrontSide,
      transparent: !!o.transparent, depthWrite: o.depthWrite ?? true
    });
    if (o.offset) { m.polygonOffset = true; m.polygonOffsetFactor = o.offset; m.polygonOffsetUnits = o.offset; }
    return m;
  }
  function outline(mesh, color, map = null, alphaTest = 0) {
    if (!vector) return null;
    const m = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new V3(1, 1, 1) }, uShade: { value: new V3(1, 1, 1) }, uLight: U.light, uSoft: U.soft, uThresh: U.thresh,
        uOutline: U.outline, uIsOutline: { value: 1 }, uOutlineColor: { value: hex(color) }, uRim: { value: 0 },
        uHasMap: { value: map ? 1 : 0 }, uMap: { value: map }, uAlphaTest: { value: alphaTest }, uOpacity: { value: 1 }, uBias: { value: 0 }
      },
      vertexShader: VS, fragmentShader: FS, side: THREE.BackSide
    });
    const o = new THREE.Mesh(mesh.geometry, m);
    mesh.add(o);
    return o;
  }
  const canvasTex = cv => { const t = new THREE.CanvasTexture(cv); t.anisotropy = 4; return t; };
  const mkCanvas = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };

  /* ---------- parametric surface helper (smooth normals, no seams) ---------- */
  function paramGeo(fn, nu, nv) {
    const count = (nu + 1) * (nv + 1);
    const pos = new Float32Array(count * 3), nor = new Float32Array(count * 3), uvs = new Float32Array(count * 2);
    const P = new V3(), A = new V3(), B = new V3(), du = new V3(), dv = new V3(), n = new V3();
    const e = 0.0015;
    let k = 0;
    for (let j = 0; j <= nv; j++) {
      const v = j / nv;
      for (let i = 0; i <= nu; i++) {
        const u = i / nu;
        fn(u, v, P);
        let vv = v;
        for (let tries = 0; tries < 4; tries++) {
          fn(u + e, vv, A); fn(u - e, vv, B); du.subVectors(A, B);
          fn(u, vv + e, A); fn(u, vv - e, B); dv.subVectors(A, B);
          n.crossVectors(dv, du);
          if (n.lengthSq() > 1e-18) break;
          vv = v < 0.5 ? vv + 2 * e : vv - 2 * e;
        }
        n.normalize();
        pos[k * 3] = P.x; pos[k * 3 + 1] = P.y; pos[k * 3 + 2] = P.z;
        nor[k * 3] = n.x; nor[k * 3 + 1] = n.y; nor[k * 3 + 2] = n.z;
        uvs[k * 2] = u; uvs[k * 2 + 1] = 1 - v;
        k++;
      }
    }
    const idx = [];
    for (let j = 0; j < nv; j++) {
      for (let i = 0; i < nu; i++) {
        const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1;
        idx.push(a, c, b, b, c, d);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    g.setIndex(idx);
    return g;
  }
  /* rounded, tapered limb along +Y (radius r0 at base, r1 at tip) */
  function limbGeo(r0, r1, len, radial = 22) {
    const pts = [];
    for (let i = 0; i <= 8; i++) { const a = -Math.PI / 2 + (i / 8) * (Math.PI / 2); pts.push(new THREE.Vector2(Math.max(1e-4, r0 * Math.cos(a)), r0 * Math.sin(a))); }
    for (let i = 0; i <= 8; i++) { const a = (i / 8) * (Math.PI / 2); pts.push(new THREE.Vector2(Math.max(1e-4, r1 * Math.cos(a)), len + r1 * Math.sin(a))); }
    return new THREE.LatheGeometry(pts, radial);
  }
  const sphereGeo = new THREE.SphereGeometry(1, 28, 20);

  /* ---------- palette (image se match) ---------- */
  const C = {
    skin: '#f2c3a4', skinS: '#d6987b', skinLine: '#8b4f3d',
    neck: '#e9b393', neckS: '#c98a6f',
    hair: '#2b2321', hairS: '#141010', hairLine: '#0a0707',
    vest: '#4a7a6d', vestS: '#36605a', vestLine: '#1d3a33',
    cream: '#f7f0dc', creamS: '#dccfa9', creamLine: '#9b8960',
    gold: '#dcb862', goldS: '#a6802f'
  };
  const skinMat = material({ color: C.skin, shade: C.skinS, rim: 0.12, bias: -0.14 });
  const neckMat = material({ color: C.neck, shade: C.neckS, rim: 0.05, bias: 0.05 });
  const hairMat = material({ color: C.hair, shade: C.hairS, rim: 0.32 });
  const creamMat = material({ color: C.cream, shade: C.creamS, rim: 0.06 });
  const vestMat = material({ color: C.vest, shade: C.vestS, rim: 0.08, double: true });
  const creamMatD = material({ color: C.cream, shade: C.creamS, rim: 0.05, double: true });
  const goldMat = material({ color: C.gold, shade: C.goldS, rim: 0.45 });

  /* ---------- scene graph ---------- */
  const root = new THREE.Group(); scene.add(root);
  const upper = new THREE.Group(); upper.position.set(0, 0.95, 0); root.add(upper);   // bows at the waist
  const body = new THREE.Group(); body.position.set(0, -0.95, 0); upper.add(body);    // absolute coordinates inside

  /* =========================== TORSO (vest + kurta) =========================== */
  const T0 = 0.80, T1 = 1.43, NEXP = 2.6;
  const AB = [[0.80, 0.170, 0.110], [0.90, 0.164, 0.104], [1.00, 0.160, 0.100], [1.10, 0.166, 0.106], [1.20, 0.176, 0.112], [1.28, 0.184, 0.106],
    [1.33, 0.182, 0.094], [1.37, 0.150, 0.080], [1.40, 0.100, 0.066], [1.42, 0.064, 0.054], [1.43, 0.050, 0.048]];
  const bust = y => 0.016 * Math.exp(-(((y - 1.2) / 0.065) ** 2));
  function torsoR(phi, y) {
    const a = interpTable(AB, y, 1), b0 = interpTable(AB, y, 2);
    const s = Math.sin(phi), c = Math.cos(phi);
    const b = c > 0 ? b0 + bust(y) * c * c * c : b0 * 0.96;
    return Math.pow(Math.pow(Math.abs(s) / a, NEXP) + Math.pow(Math.abs(c) / b, NEXP), -1 / NEXP);
  }
  const torsoAt = (phi, y, out) => { const r = torsoR(phi, y); return out.set(r * Math.sin(phi), y, r * Math.cos(phi)); };

  function torsoTexture() {
    const W = 1024, H = 1024, cv = mkCanvas(W, H), g = cv.getContext('2d');
    const X = phi => (phi / (2 * Math.PI) + 0.5) * W;
    const Y = y => (T1 - y) / (T1 - T0) * H;
    const sy = H / (T1 - T0);
    const tA = new V3(), tB = new V3();
    const sx = (phi, y) => { torsoAt(phi + 0.01, y, tA); torsoAt(phi - 0.01, y, tB); return (W / (2 * Math.PI)) * 0.02 / tA.distanceTo(tB); };
    const pathP = (pts, close) => { g.beginPath(); pts.forEach(([p, y], i) => (i ? g.lineTo(X(p), Y(y)) : g.moveTo(X(p), Y(y)))); if (close) g.closePath(); };
    const GOLD = '#d8b25a', CREAM = C.cream, PIPE = 0.0046 * 1350;

    g.fillStyle = C.vest; g.fillRect(0, 0, W, H);
    // princess seams (subtle)
    g.strokeStyle = 'rgba(25,55,48,0.35)'; g.lineWidth = 3;
    for (const s of [-1, 1]) { pathP([[s * 40 * DEG, 1.17], [s * 34 * DEG, 1.0], [s * 30 * DEG, T0]], false); g.stroke(); }

    // armholes -> cream kurta + gold piping
    const PHF = [[1.15, 92], [1.20, 86], [1.26, 77], [1.30, 72], [1.33, 72], [1.36, 75], [1.40, 78], [1.43, 80]];
    const phf = y => interpTable(PHF, y, 1) * DEG;
    for (const s of [1, -1]) {
      const front = [], back = [];
      for (let y = 1.15; y <= T1 + 1e-6; y += 0.004) { front.push([s * phf(y), y]); back.push([s * (Math.PI - phf(y)), y]); }
      pathP(front.concat(back.slice().reverse()), true); g.fillStyle = CREAM; g.fill();
      g.strokeStyle = GOLD; g.lineWidth = PIPE; g.lineCap = 'round'; g.lineJoin = 'round';
      pathP(front, false); g.stroke(); pathP(back, false); g.stroke();
    }
    // V neckline -> cream kurta, placket, gold piping, centre line
    const PV = y => 36 * DEG * Math.pow(clamp((y - 1.29) / (T1 - 1.29), 0, 1), 0.75);
    const left = [], right = [];
    for (let y = 1.29; y <= T1 + 1e-6; y += 0.003) { left.push([-PV(y), y]); right.push([PV(y), y]); }
    pathP(left.concat(right.slice().reverse()), true); g.fillStyle = CREAM; g.fill();
    g.strokeStyle = 'rgba(160,140,95,0.6)'; g.lineWidth = 2.5; pathP([[0, T1], [0, 1.335]], false); g.stroke();
    g.strokeStyle = GOLD; g.lineWidth = PIPE;
    pathP(left, false); g.stroke(); pathP(right, false); g.stroke();
    pathP([[0, 1.292], [0, T0]], false); g.stroke();

    // "Moksha Voyage" embroidery on her left chest
    const tphi = 47 * DEG, ty = 1.287, kx = sx(tphi, ty);
    g.save();
    g.translate(X(tphi), Y(ty));
    g.scale(kx / sy, 1);
    const fs = 0.0185 * sy;
    g.font = `600 ${fs}px Georgia, 'Times New Roman', serif`;
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = 'rgba(16,40,34,0.55)'; g.fillText(brandText, 2, 2);
    const grd = g.createLinearGradient(0, -fs / 2, 0, fs / 2); grd.addColorStop(0, '#f6dd96'); grd.addColorStop(1, '#c69b3f');
    g.fillStyle = grd; g.fillText(brandText, 0, 0);
    g.restore();
    return canvasTex(cv);
  }
  const torso = new THREE.Mesh(
    paramGeo((u, v, out) => torsoAt((u - 0.5) * 2 * Math.PI, lerp(T1, T0, v), out), 120, 80),
    material({ map: torsoTexture(), shade: new V3(0.76, 0.8, 0.8), rim: 0.06 })
  );
  body.add(torso); outline(torso, C.vestLine);

  /* collars: cream kurta band + green vest mandarin collar (front open) */
  function collar(rTop, rBot, h, y, gapDeg, mat) {
    const gap = gapDeg * DEG;
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, 48, 1, true, gap, Math.PI * 2 - 2 * gap), mat);
    m.position.y = y; m.scale.z = 0.9; body.add(m);
    const pts = [];
    for (let i = 0; i <= 48; i++) { const t = gap + (i / 48) * (Math.PI * 2 - 2 * gap); pts.push(new V3(rTop * Math.sin(t), y + h / 2, rTop * Math.cos(t) * 0.9)); }
    body.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 64, 0.0026, 6), goldMat));
    for (const t of [gap, -gap]) {
      const a = new V3(rBot * Math.sin(t), y - h / 2, rBot * Math.cos(t) * 0.9), b = new V3(rTop * Math.sin(t), y + h / 2, rTop * Math.cos(t) * 0.9);
      body.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.LineCurve3(a, b), 2, 0.0026, 6), goldMat));
    }
  }
  collar(0.055, 0.058, 0.038, 1.423, 11, creamMatD);
  collar(0.065, 0.073, 0.044, 1.423, 31, vestMat);

  /* neck */
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.044, 0.047, 0.17, 28, 1, true), neckMat);
  neck.position.set(0, 1.47, 0.0); body.add(neck); outline(neck, C.skinLine);

  /* ================================= HEAD ================================= */
  const R = 0.124;
  const headPivot = new THREE.Group(); headPivot.position.set(0, 1.455, 0.004); body.add(headPivot);
  const head = new THREE.Group(); head.position.set(0, 0.13, 0.012); headPivot.add(head);

  function headShape(x, y, z, out) {
    let X = x * 0.86, Y = y * 1.08, Z = z * 0.97;
    if (y < 0) {
      const t = -y;
      X *= 1 - 0.2 * Math.pow(t, 1.5);
      if (z > 0) Z *= 1 + 0.12 * t * z;
      else Z *= 1 - 0.18 * t * t;
    }
    if (z > 0.6) Z -= (z - 0.6) * 0.08;
    const cheek = Math.exp(-((y + 0.28) ** 2) / 0.035 - ((Math.abs(x) - 0.62) ** 2) / 0.06) * Math.max(z, 0);
    X += Math.sign(x) * 0.03 * cheek;
    Z += 0.02 * cheek;
    return out.set(X, Y, Z);
  }
  function sphereFn(lon0, lon1, lat0, lat1, kFn) {
    return (u, v, out) => {
      const lon = lerp(lon0, lon1, u), lat = lerp(lat0, lat1, v), cl = Math.cos(lat);
      headShape(cl * Math.sin(lon), Math.sin(lat), cl * Math.cos(lon), out);
      return out.multiplyScalar(R * (kFn ? kFn(lat, lon) : 1));
    };
  }
  const headPoint = (latD, lonD, k = 1) => sphereFn(lonD * DEG, lonD * DEG, latD * DEG, latD * DEG, () => k)(0, 0, new V3());

  /* hairline (latitude where hair starts, by |longitude|) */
  const HL = [[0, 37], [10, 36], [22, 31], [35, 22], [48, 11], [60, 2], [72, -5], [85, -11], [100, -21], [115, -34], [135, -46], [160, -52], [180, -54]];
  const hairLat = lonD => interpTable(HL, Math.abs(((lonD + 540) % 360) - 180), 1);
  function hairK(lat, lon) {
    const latD = lat / DEG, lonD = ((lon / DEG + 540) % 360) - 180, a = Math.abs(lonD);
    const d = latD - hairLat(lonD);
    const fall = sstep(-2, 13, d);
    const side = Math.exp(-(((a - 80) / 40) ** 2)) * Math.exp(-(((latD - 8) / 28) ** 2));
    const back = 0.02 * sstep(100, 160, a) * (1 - sstep(45, 85, latD));
    return 1.02 + (0.035 + 0.07 * side + back) * fall;
  }

  // skin texture (dark under the hair so no gaps show)
  function headTexture() {
    const W = 512, H = 256, cv = mkCanvas(W, H), g = cv.getContext('2d');
    g.fillStyle = C.skin; g.fillRect(0, 0, W, H);
    g.beginPath(); g.moveTo(0, 0);
    for (let lon = -180; lon <= 180; lon += 2) g.lineTo((lon + 180) / 360 * W, (90 - (hairLat(lon) + 2.5)) / 180 * H);
    g.lineTo(W, 0); g.closePath(); g.fillStyle = C.hair; g.fill();
    return canvasTex(cv);
  }
  const skinTint = tint(C.skin, C.skinS);
  const headMesh = new THREE.Mesh(paramGeo(sphereFn(-Math.PI, Math.PI, Math.PI / 2, -Math.PI / 2), 96, 72), material({ map: headTexture(), shade: skinTint, rim: 0.12, bias: -0.27 }));
  head.add(headMesh); outline(headMesh, C.skinLine);

  // hair: shell with painted vector strands + cut-out hairline
  function hairTexture() {
    const W = 1024, H = 512, cv = mkCanvas(W, H), g = cv.getContext('2d');
    const X = lonD => (lonD + 180) / 360 * W, Y = latD => (90 - latD) / 180 * H;
    g.beginPath(); g.moveTo(0, 0);
    for (let lon = -180; lon <= 180; lon += 1) g.lineTo(X(lon), Y(hairLat(lon)));
    g.lineTo(W, 0); g.closePath();
    g.fillStyle = C.hair; g.fill();
    g.save(); g.clip();
    g.lineCap = 'round';
    for (const s of [-1, 1]) {
      // soft sheen band (vector highlight)
      g.strokeStyle = s > 0 ? 'rgba(98,80,74,0.55)' : 'rgba(80,66,60,0.4)'; g.lineWidth = 26;
      g.beginPath(); g.moveTo(X(s * 6), Y(60)); g.quadraticCurveTo(X(s * 40), Y(58), X(s * 72), Y(26)); g.stroke();
      // combed-back strands from the centre parting
      for (let k = 0; k < 13; k++) {
        const lat0 = 32 + k * 4.2;
        g.strokeStyle = k % 3 === 0 ? 'rgba(0,0,0,0.35)' : 'rgba(105,86,78,0.42)';
        g.lineWidth = k % 3 === 0 ? 2.2 : 2.6;
        g.beginPath(); g.moveTo(X(s * 1.5), Y(lat0));
        g.quadraticCurveTo(X(s * (45 + k * 3)), Y(lat0 + 8), X(s * (112 + k * 4.5)), Y(-24 - k * 1.4));
        g.stroke();
      }
      for (let k = 0; k < 6; k++) {
        g.strokeStyle = 'rgba(105,86,78,0.35)'; g.lineWidth = 2;
        g.beginPath(); g.moveTo(X(s * (60 + k * 6)), Y(4 - k * 3)); g.quadraticCurveTo(X(s * (95 + k * 5)), Y(4 - k * 4), X(s * (140 + k * 6)), Y(-30 - k * 2)); g.stroke();
      }
    }
    // centre parting
    g.strokeStyle = '#6e5249'; g.lineWidth = 5;
    g.beginPath(); g.moveTo(X(0), Y(hairLat(0) - 1)); g.lineTo(X(0), Y(86)); g.stroke();
    g.restore();
    return canvasTex(cv);
  }
  const hairTex = hairTexture();
  const hairMesh = new THREE.Mesh(paramGeo(sphereFn(-Math.PI, Math.PI, Math.PI / 2, -Math.PI / 2, hairK), 128, 80),
    material({ map: hairTex, shade: tint(C.hair, C.hairS), alphaTest: 0.5, rim: 0.32 }));
  head.add(hairMesh); outline(hairMesh, C.hairLine, hairTex, 0.5);

  // low bun at the nape
  const bun = new THREE.Mesh(sphereGeo, hairMat); bun.position.set(0, -0.088, -0.08); bun.scale.set(0.07, 0.048, 0.046); head.add(bun); outline(bun, C.hairLine);
  const coil = new THREE.Mesh(new THREE.TorusGeometry(0.033, 0.013, 12, 36), hairMat); coil.position.set(0, -0.086, -0.114); head.add(coil); outline(coil, C.hairLine);

  // nose, ears, gold stud earrings
  const nose = new THREE.Mesh(sphereGeo, skinMat);
  nose.position.copy(headPoint(-13, 0, 0.955)); nose.scale.set(0.07 * R, 0.15 * R, 0.09 * R); nose.rotation.x = -0.22; head.add(nose);
  for (const s of [-1, 1]) {
    const ear = new THREE.Mesh(sphereGeo, skinMat);
    const ep = headPoint(-17, s * 92, 0.99);
    ear.position.copy(ep); ear.scale.set(0.012, 0.03, 0.02); ear.rotation.set(0, s * 0.35, -s * 0.12); head.add(ear); outline(ear, C.skinLine);
    const stud = new THREE.Mesh(sphereGeo, goldMat); stud.scale.setScalar(0.0068); stud.position.copy(ep).add(new V3(s * 0.006, -0.026, 0.006)); head.add(stud);
  }

  /* ----- face decal: eyes, brows, lips, bindi drawn as vector shapes ----- */
  const FACE = { W: 640, H: 400, lon0: -60, lon1: 60, lat0: 25, lat1: -50 };
  const faceCv = mkCanvas(FACE.W, FACE.H), fg = faceCv.getContext('2d');
  const faceTex = canvasTex(faceCv);
  const faceMesh = new THREE.Mesh(
    paramGeo(sphereFn(FACE.lon0 * DEG, FACE.lon1 * DEG, FACE.lat0 * DEG, FACE.lat1 * DEG, () => 1.004), 48, 32),
    material({ map: faceTex, shade: skinTint, transparent: true, depthWrite: false, offset: -2, rim: 0, bias: -0.27 })
  );
  faceMesh.renderOrder = 2; head.add(faceMesh);
  const PXU = FACE.W / ((FACE.lon1 - FACE.lon0) * DEG);
  function fp(x, y) {
    const lat = Math.asin(clamp(y, -0.995, 0.995));
    const lon = Math.asin(clamp(x / Math.cos(lat), -0.995, 0.995));
    return [(lon / DEG - FACE.lon0) / (FACE.lon1 - FACE.lon0) * FACE.W, (FACE.lat0 - lat / DEG) / (FACE.lat0 - FACE.lat1) * FACE.H];
  }
  function path(pts, close = true) { fg.beginPath(); pts.forEach(([x, y], i) => { const [px, py] = fp(x, y); i ? fg.lineTo(px, py) : fg.moveTo(px, py); }); if (close) fg.closePath(); }

  function eyeShape(sg, lid) {
    const cx = sg * 0.335, cy = -0.06, hw = 0.122;
    const xi = cx - sg * hw, xo = cx + sg * hw, yi = cy - 0.004, yo = cy + 0.018;
    const up = [], lo = [], open = [];
    for (let i = 0; i <= 28; i++) {
      const t = i / 28, x = lerp(xi, xo, t), base = lerp(yi, yo, t), s = Math.sin(Math.PI * t);
      const yOpen = base + 0.078 * Math.pow(s, 0.75) * (1 + 0.12 * Math.sin(Math.PI * (t - 0.15)));
      const yClosed = base - 0.026 * s;
      const yLo = base - 0.044 * Math.pow(s, 1.1);
      lo.push([x, yLo]); open.push([x, yOpen]); up.push([x, Math.max(lerp(yOpen, yClosed, lid), yLo)]);
    }
    return { cx, cy, up, lo, open };
  }
  function drawEye(sg, f) {
    const E = eyeShape(sg, f.lid);
    fg.lineCap = 'round'; fg.lineJoin = 'round';
    path(E.open.slice(4, 26).map(([x, y], i) => [x, y + 0.036 + 0.006 * Math.sin(Math.PI * i / 22)]), false);
    fg.strokeStyle = 'rgba(160,92,68,0.45)'; fg.lineWidth = 0.010 * PXU; fg.stroke();
    if (f.lid < 0.9) {
      path(E.up.concat(E.lo.slice().reverse()));
      fg.fillStyle = '#fffaf3'; fg.fill();
      fg.save(); fg.clip();
      const [px, py] = fp(E.cx + f.gx * 0.052, E.cy + 0.012 + f.gy * 0.03), r = 0.062 * PXU;
      const gr = fg.createRadialGradient(px, py + r * 0.3, r * 0.1, px, py, r);
      gr.addColorStop(0, '#8d5733'); gr.addColorStop(0.6, '#5a321c'); gr.addColorStop(1, '#2a150b');
      fg.beginPath(); fg.arc(px, py, r, 0, 7); fg.fillStyle = gr; fg.fill();
      fg.beginPath(); fg.arc(px, py, r * 0.46, 0, 7); fg.fillStyle = '#140904'; fg.fill();
      fg.beginPath(); fg.arc(px - r * 0.36, py - r * 0.38, r * 0.25, 0, 7); fg.fillStyle = 'rgba(255,255,255,0.92)'; fg.fill();
      fg.beginPath(); fg.arc(px + r * 0.32, py + r * 0.3, r * 0.11, 0, 7); fg.fillStyle = 'rgba(255,255,255,0.7)'; fg.fill();
      path(E.up, false); fg.strokeStyle = 'rgba(110,60,40,0.3)'; fg.lineWidth = 0.035 * PXU; fg.stroke();
      fg.restore();
      path(E.lo.slice(9), false); fg.strokeStyle = 'rgba(95,52,38,0.5)'; fg.lineWidth = 0.008 * PXU; fg.stroke();
    }
    const top = E.up.map(([x, y], i) => [x, y + 0.007 + 0.017 * Math.pow(i / (E.up.length - 1), 0.8)]);
    path(E.up.concat(top.slice().reverse())); fg.fillStyle = '#1b100c'; fg.fill();
    const o = E.up[E.up.length - 1], o2 = E.up[E.up.length - 5];
    path([[o2[0], o2[1] + 0.022], [o[0] + sg * 0.05, o[1] + 0.046], [o[0] - sg * 0.004, o[1] - 0.002]]); fg.fill();
  }
  function drawBrow(sg, raise) {
    const p0 = [sg * 0.115, 0.118], p1 = [sg * 0.33, 0.235], p2 = [sg * 0.545, 0.135];
    const topE = [], botE = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24, a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, c = t * t;
      const x = a * p0[0] + b * p1[0] + c * p2[0];
      const y = a * p0[1] + b * p1[1] + c * p2[1] + 0.025 * raise * (0.6 + 0.4 * t);
      const th = lerp(0.038, 0.009, Math.pow(t, 0.85)) * (t < 0.1 ? 0.75 + 2.5 * t : 1);
      topE.push([x, y + th * 0.55]); botE.push([x, y - th * 0.45]);
    }
    path(topE.concat(botE.reverse())); fg.fillStyle = '#2b1b15'; fg.fill();
  }
  function drawMouth(m, smile) {
    const hw = 0.168 + 0.02 * smile, yc = -0.548 + 0.022 * smile, cy = -0.578, g = 0.085 * m;
    const xs = []; for (let i = 0; i <= 30; i++) xs.push(-hw + 2 * hw * i / 30);
    const q = x => Math.max(0, 1 - (x / hw) ** 2);
    const k = x => Math.pow(q(x), 0.8);
    const L = x => yc + (cy - yc) * q(x);
    const upB = x => L(x) + 0.25 * g * k(x), loT = x => L(x) - 0.75 * g * k(x);
    const thU = x => 0.034 * Math.pow(q(x), 0.6) * (1 - 0.35 * Math.exp(-((x / 0.028) ** 2))) + 0.004 * Math.exp(-(((Math.abs(x) - 0.05) / 0.025) ** 2)) * q(x);
    const thL = x => 0.046 * Math.pow(q(x), 0.55);
    path(xs.map(x => [x, loT(x)]).concat(xs.slice().reverse().map(x => [x, loT(x) - thL(x)]))); fg.fillStyle = '#d27f76'; fg.fill();
    if (g > 0.003) {
      path(xs.map(x => [x, upB(x)]).concat(xs.slice().reverse().map(x => [x, loT(x)]))); fg.fillStyle = '#5b1a1d'; fg.fill();
      fg.save(); fg.clip();
      path(xs.map(x => [x, upB(x) + 0.01]).concat(xs.slice().reverse().map(x => [x, upB(x) - 0.022]))); fg.fillStyle = '#fbf7f2'; fg.fill();
      const [tx, ty] = fp(0, loT(0)); fg.beginPath(); fg.ellipse(tx, ty, 0.09 * PXU, 0.035 * PXU, 0, 0, 7); fg.fillStyle = '#c4525a'; fg.fill();
      fg.restore();
    }
    path(xs.map(x => [x, upB(x)]).concat(xs.slice().reverse().map(x => [x, upB(x) + thU(x)]))); fg.fillStyle = '#b9625b'; fg.fill();
    path(xs.map(x => [x, upB(x)]), false); fg.strokeStyle = '#7a3431'; fg.lineWidth = (0.007 + 0.006 * (1 - m)) * PXU; fg.lineCap = 'round'; fg.stroke();
    const [hx, hy] = fp(0.03, loT(0.03) - thL(0.03) * 0.45); fg.beginPath(); fg.ellipse(hx, hy, 0.03 * PXU, 0.009 * PXU, 0, 0, 7); fg.fillStyle = 'rgba(255,255,255,0.35)'; fg.fill();
    for (const sg of [-1, 1]) { path([[sg * (hw - 0.005), yc + 0.004], [sg * (hw + 0.022), yc + 0.018 * smile + 0.004]], false); fg.strokeStyle = 'rgba(150,75,60,0.45)'; fg.lineWidth = 0.008 * PXU; fg.stroke(); }
  }
  function drawFace(f) {
    fg.clearRect(0, 0, FACE.W, FACE.H);
    for (const sg of [-1, 1]) {
      const [px, py] = fp(sg * 0.5, -0.31), r = 0.17 * PXU;
      const gr = fg.createRadialGradient(px, py, 0, px, py, r);
      gr.addColorStop(0, 'rgba(236,120,110,0.32)'); gr.addColorStop(1, 'rgba(236,120,110,0)');
      fg.fillStyle = gr; fg.fillRect(px - r, py - r, 2 * r, 2 * r);
    }
    for (const sg of [-1, 1]) drawBrow(sg, f.brow);
    for (const sg of [-1, 1]) drawEye(sg, f);
    path([[-0.055, -0.295], [-0.025, -0.318], [0, -0.322], [0.025, -0.318], [0.055, -0.295]], false);
    fg.strokeStyle = 'rgba(165,90,68,0.45)'; fg.lineWidth = 0.011 * PXU; fg.lineCap = 'round'; fg.stroke();
    drawMouth(f.mouth, f.smile);
    const [bx, by] = fp(0, 0.232);
    fg.beginPath(); fg.arc(bx, by, 0.03 * PXU, 0, 7); fg.fillStyle = '#8c1219'; fg.fill();
    fg.beginPath(); fg.arc(bx - 0.008 * PXU, by - 0.009 * PXU, 0.009 * PXU, 0, 7); fg.fillStyle = 'rgba(255,255,255,0.35)'; fg.fill();
    faceTex.needsUpdate = true;
  }

  /* ================================= ARMS ================================= */
  const L1 = 0.262, L2 = 0.248;
  const SHOULDER = (s) => new V3(s * 0.2, 1.332, -0.005);
  const RELAX = { w: s => new V3(s * 0.245, 0.845, 0.075), pole: s => new V3(s * 0.36, 1.0, -0.5) };
  const NAMASTE = { w: s => new V3(s * 0.0165, 1.13, 0.205), pole: s => new V3(s * 0.8, 0.75, -0.15) };
  const UPY = new V3(0, 1, 0);
  function solveIK(S, W, pole, outE, outW) {
    const d = new V3().subVectors(W, S);
    const dist = clamp(d.length(), Math.abs(L1 - L2) + 1e-3, L1 + L2 - 1e-4);
    d.normalize();
    outW.copy(S).addScaledVector(d, dist);
    const a = (L1 * L1 - L2 * L2 + dist * dist) / (2 * dist);
    const h = Math.sqrt(Math.max(L1 * L1 - a * a, 0));
    const pp = new V3().subVectors(pole, S); pp.addScaledVector(d, -pp.dot(d)).normalize();
    outE.copy(S).addScaledVector(d, a).addScaledVector(pp, h);
  }
  function armTargets(s, t, outW, outPole) {
    outW.lerpVectors(RELAX.w(s), NAMASTE.w(s), t);
    outW.z += 0.07 * Math.sin(Math.PI * t);
    outW.x += s * 0.03 * Math.sin(Math.PI * t);
    outPole.lerpVectors(RELAX.pole(s), NAMASTE.pole(s), t);
  }
  function buildHand(s) {
    const grp = new THREE.Group();
    const palm = new THREE.Mesh(sphereGeo, skinMat); palm.scale.set(0.0135, 0.05, 0.033); palm.position.set(0, 0.045, 0); grp.add(palm); outline(palm, C.skinLine);
    const fz = [0.024, 0.008, -0.008, -0.024], fl = [0.066, 0.073, 0.069, 0.057];
    for (let k = 0; k < 4; k++) {
      const f = new THREE.Mesh(limbGeo(0.0092, 0.0078, fl[k], 12), skinMat);
      f.position.set(0.004, 0.072, s * fz[k]); f.rotation.x = s * fz[k] * 3; grp.add(f); outline(f, C.skinLine);
    }
    const th = new THREE.Mesh(limbGeo(0.0105, 0.009, 0.048, 12), skinMat);
    th.position.set(0.004, 0.022, s * 0.026); th.rotation.set(s * 0.7, 0, -0.15); grp.add(th); outline(th, C.skinLine);
    return grp;
  }
  const arms = [-1, 1].map(s => {
    const A = { s, S: SHOULDER(s), E: new V3(), W: new V3(), Wt: new V3(), pole: new V3() };
    A.cap = new THREE.Mesh(sphereGeo, creamMat); A.cap.scale.setScalar(0.052); A.cap.position.copy(A.S); body.add(A.cap); outline(A.cap, C.creamLine);
    A.upper = new THREE.Mesh(limbGeo(0.053, 0.047, L1), creamMat); body.add(A.upper); outline(A.upper, C.creamLine);
    A.elbow = new THREE.Mesh(sphereGeo, creamMat); A.elbow.scale.setScalar(0.047); body.add(A.elbow); outline(A.elbow, C.creamLine);
    A.sleeve = new THREE.Mesh(limbGeo(0.048, 0.045, 0.1), creamMat); body.add(A.sleeve); outline(A.sleeve, C.creamLine);
    const cuff = new THREE.Mesh(new THREE.TorusGeometry(0.0455, 0.0055, 8, 32), goldMat); cuff.position.y = 0.098; cuff.rotation.x = Math.PI / 2; A.sleeve.add(cuff);
    A.fore = new THREE.Mesh(limbGeo(0.036, 0.027, L2), skinMat); body.add(A.fore); outline(A.fore, C.skinLine);
    A.hand = buildHand(s); body.add(A.hand);
    return A;
  });
  const qTmp = new THREE.Quaternion(), mBasis = new THREE.Matrix4(), hX = new V3(), hY = new V3(), hZ = new V3(), dTmp = new V3();
  function poseArm(A, t, wob) {
    armTargets(A.s, t, A.Wt, A.pole);
    A.Wt.y += wob; A.Wt.x += A.s * wob * 0.5;
    solveIK(A.S, A.Wt, A.pole, A.E, A.W);
    A.upper.position.copy(A.S); A.upper.quaternion.setFromUnitVectors(UPY, dTmp.subVectors(A.E, A.S).normalize());
    A.elbow.position.copy(A.E);
    const fd = dTmp.subVectors(A.W, A.E).normalize().clone();
    A.sleeve.position.copy(A.E); A.sleeve.quaternion.setFromUnitVectors(UPY, fd);
    A.fore.position.copy(A.E); A.fore.quaternion.copy(A.sleeve.quaternion);
    hY.copy(fd).lerp(new V3(0, 0.996, 0.09), sstep(0.25, 0.95, t)).normalize();
    hX.set(-A.s, 0, 0); hX.addScaledVector(hY, -hX.dot(hY)).normalize();
    hZ.crossVectors(hX, hY);
    mBasis.makeBasis(hX, hY, hZ); qTmp.setFromRotationMatrix(mBasis);
    A.hand.position.copy(A.W); A.hand.quaternion.copy(qTmp);
  }

  /* ============================== DUPATTA ============================== */
  // A stole over her right shoulder: swept over the body so it never cuts into the arm/chest
  function buildDupatta() {
    const s = -1, S = SHOULDER(s);
    const caps = [{ a: S.clone(), b: S.clone(), r: 0.054 }];
    for (let k = 0; k <= 8; k++) {
      const Wt = new V3(), pole = new V3(), E = new V3(), W = new V3();
      armTargets(s, k / 8, Wt, pole); solveIK(S, Wt, pole, E, W);
      caps.push({ a: S.clone(), b: E.clone(), r: 0.054 }, { a: E.clone(), b: E.clone(), r: 0.049 });
    }
    const ab = new V3(), ap = new V3(), q = new V3(), P = new V3();
    const segDist = (p, a, b) => { ab.subVectors(b, a); const L = ab.lengthSq(); const t = L > 1e-9 ? clamp(ap.subVectors(p, a).dot(ab) / L, 0, 1) : 0; return q.copy(a).addScaledVector(ab, t).distanceTo(p); };
    function inside(p) {
      if (p.y >= T0 && p.y <= T1 && Math.hypot(p.x, p.z) < torsoR(Math.atan2(p.x, p.z), p.y)) return true;
      if (p.y > T1 - 0.03 && p.y < 1.5 && Math.hypot(p.x, p.z) < 0.078) return true;
      for (const c of caps) if (segDist(p, c.a, c.b) < c.r) return true;
      return false;
    }
    function reach(x, y0, th) {   // outer body surface along the ray (0, sin th, cos th) from (x, y0, 0)
      const dy = Math.sin(th), dz = Math.cos(th);
      let last = -1;
      for (let t = 0; t <= 0.3; t += 0.002) { P.set(x, y0 + dy * t, dz * t); if (inside(P)) last = t; }
      return last;
    }
    const YC = 1.30, NW = 22, NF = 40, NT = 22;
    const rows = [];
    for (let i = 0; i <= NF; i++) rows.push({ f: true, y: lerp(0.8, YC, i / NF) });
    for (let i = 1; i <= NT; i++) rows.push({ f: false, th: (i / NT) * 0.82 * Math.PI });
    const NS = rows.length - 1;
    const xr = r => (r.f ? [lerp(-0.056, -0.086, sstep(0.85, YC, r.y)), lerp(-0.2, -0.228, sstep(0.9, YC, r.y))] : [-0.086, -0.236]);
    const Hm = rows.map(r => { const [xi, xo] = xr(r); const a = []; for (let j = 0; j <= NW; j++) { const x = lerp(xi, xo, j / NW); a.push(r.f ? reach(x, r.y, 0) : reach(x, YC, r.th)); } return a; });
    // smooth "draped" envelope: max-plus dilation with a parabola (separable)
    const K = 0.0004, WIN = 18;
    const h1 = Hm.map(row => row.map((_, j) => { let m = -1; for (let l = Math.max(0, j - WIN); l <= Math.min(NW, j + WIN); l++) if (row[l] >= 0) m = Math.max(m, row[l] - K * (j - l) * (j - l)); return m; }));
    const h2 = h1.map((row, i) => row.map((_, j) => { let m = -1; for (let k = Math.max(0, i - WIN); k <= Math.min(NS, i + WIN); k++) if (h1[k][j] >= 0) m = Math.max(m, h1[k][j] - K * (i - k) * (i - k)); return m; }));
    // bridge dips (fabric spans hollows like a tent): upper convex hull of each row
    for (const row of h2) {
      const hull = [];
      row.forEach((h, j) => {
        while (hull.length >= 2) {
          const [j1, h1v] = hull[hull.length - 2], [j2, h2v] = hull[hull.length - 1];
          if ((h2v - h1v) * (j - j1) <= (h - h1v) * (j2 - j1)) hull.pop(); else break;
        }
        hull.push([j, h]);
      });
      for (let k = 0; k < hull.length - 1; k++) {
        const [ja, ha] = hull[k], [jb, hb] = hull[k + 1];
        for (let j = ja; j <= jb; j++) row[j] = Math.max(row[j], lerp(ha, hb, (j - ja) / Math.max(1, jb - ja)) - 0.002);
      }
    }
    const pos = [], uv = [], idx = [];
    for (let i = 0; i <= NS; i++) {
      const r = rows[i], [xi, xo] = xr(r);
      for (let j = 0; j <= NW; j++) {
        const w = j / NW, x = lerp(xi, xo, w);
        const pleat = 0.0042 * (0.5 - 0.5 * Math.cos(2 * Math.PI * 3 * w)) * (r.f ? 1 : 0.6);
        const h = Math.max(h2[i][j], 0.02) + 0.007 + pleat;
        if (r.f) pos.push(x, r.y, h); else pos.push(x, YC + Math.sin(r.th) * h, Math.cos(r.th) * h);
        uv.push(w, i / NS);
      }
    }
    for (let i = 0; i < NS; i++) for (let j = 0; j < NW; j++) { const a = i * (NW + 1) + j, b = a + 1, c = a + NW + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
    g.computeVertexNormals();
    // khadi texture with gold borders (w = 0 inner edge, 1 outer edge)
    const cv = mkCanvas(256, 1024), x = cv.getContext('2d');
    x.fillStyle = C.cream; x.fillRect(0, 0, 256, 1024);
    x.strokeStyle = 'rgba(185,165,115,0.2)'; x.lineWidth = 1;
    for (let i = 0; i < 256; i += 8) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, 1024); x.stroke(); }
    for (let i = 0; i < 1024; i += 8) { x.beginPath(); x.moveTo(0, i); x.lineTo(256, i); x.stroke(); }
    x.fillStyle = '#d8b25a'; x.fillRect(8, 0, 20, 1024); x.fillRect(34, 0, 4, 1024); x.fillRect(226, 0, 14, 1024);
    x.fillStyle = 'rgba(150,120,60,0.8)'; x.fillRect(0, 0, 4, 1024); x.fillRect(252, 0, 4, 1024);
    const mesh = new THREE.Mesh(g, material({ map: canvasTex(cv), shade: tint(C.cream, C.creamS), double: true, rim: 0.05 }));
    body.add(mesh);
  }
  buildDupatta();

  /* ============================ BEHAVIOUR ============================ */
  const st = {
    time: 0, seq: null, arm: 0, bow: 0, closed: 0, smile: 0.62, brow: 0, mouth: 0, excite: 0, exciteT: 0,
    yaw: 0, pitch: 0, eyeYaw: 0, eyePitch: 0, rx: 0, ry: 0, lookT: 1.5,
    blinkT: -1, nextBlink: 2.2, dbl: false, talkUntil: 0,
    px: 0, py: 0, pointerT: -99, focus: null, focusUntil: 0, nodT: -1, paused: false
  };
  const side = options.side === 'left' ? 1 : -1;  // page content is on this side of her
  const calm = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  function startBlink() { if (st.blinkT < 0) st.blinkT = 0; }
  function pickLook() {
    if (calm) { st.rx = 0; st.ry = 0; st.lookT = 3; return; }
    const r = Math.random();
    if (r < 0.36) { st.rx = 0; st.ry = 0; }
    else if (r < 0.72) { st.rx = side * (0.25 + Math.random() * 0.4); st.ry = (Math.random() - 0.4) * 0.26; }
    else { st.rx = -side * (0.18 + Math.random() * 0.3); st.ry = (Math.random() - 0.45) * 0.24; }
    st.lookT = 1.3 + Math.random() * 2.5;
    if (Math.random() < 0.55) startBlink();
  }
  const hv = new V3();
  function headScreen() {
    head.getWorldPosition(hv); hv.project(camera);
    const r = canvas.getBoundingClientRect();
    return [r.left + (hv.x * 0.5 + 0.5) * r.width, r.top + (-hv.y * 0.5 + 0.5) * r.height];
  }

  function update(dt) {
    st.time += dt;
    const T = st.time;
    let armT = 0, bowT = 0, closedT = 0, smileT = 0.62, browT = 0, override = null;
    if (st.seq) {
      const t = (st.seq.t += dt);
      armT = t < 0.2 ? 0 : t < 1.05 ? ease((t - 0.2) / 0.85) : t < 3.25 ? 1 : t < 4.05 ? 1 - ease((t - 3.25) / 0.8) : 0;
      bowT = t < 1.0 ? 0 : t < 1.45 ? ease((t - 1.0) / 0.45) : t < 2.05 ? 1 : t < 2.6 ? 1 - ease((t - 2.05) / 0.55) : 0;
      closedT = t < 1.1 ? 0 : t < 1.35 ? (t - 1.1) / 0.25 : t < 2.15 ? 1 : t < 2.4 ? 1 - (t - 2.15) / 0.25 : 0;
      smileT = 0.62 + 0.3 * sstep(0.8, 1.4, t) * (1 - sstep(3.6, 4.3, t));
      browT = 0.35 * sstep(2.3, 2.7, t) * (1 - sstep(3.4, 4.0, t));
      override = [0, 0.02];
      if (t >= st.seq.dur) { const done = st.seq.done; st.seq = null; if (done) done(); }
    }
    st.arm = armT; st.bow = bowT;
    st.closed = damp(st.closed, closedT, 25, dt);
    st.excite = damp(st.excite, st.exciteT, 6, dt);
    st.smile = damp(st.smile, smileT + 0.2 * st.excite, 6, dt);
    st.brow = damp(st.brow, browT + 0.5 * st.excite, 8, dt);

    // where to look
    let tx = st.rx, ty = st.ry;
    if (override) [tx, ty] = override;
    else if (st.focus && T < st.focusUntil) [tx, ty] = st.focus;
    else if (T - st.pointerT < 2.6) {
      const [hx, hy] = headScreen();
      tx = clamp(Math.atan2(st.px - hx, 650) * 1.15, -0.7, 0.7);
      ty = clamp(Math.atan2(st.py - hy, 650) * 0.9, -0.3, 0.35);
    } else {
      st.lookT -= dt;
      if (st.lookT <= 0) pickLook();
      tx = st.rx; ty = st.ry;
    }
    const prevEye = st.eyeYaw;
    st.eyeYaw = damp(st.eyeYaw, tx, 20, dt); st.eyePitch = damp(st.eyePitch, ty, 20, dt);
    st.yaw = damp(st.yaw, tx * 0.74, 4.2, dt); st.pitch = damp(st.pitch, ty * 0.7, 4.2, dt);
    if (Math.abs(st.eyeYaw - prevEye) > 0.02 && Math.random() < 0.02) startBlink();

    // blink
    st.nextBlink -= dt;
    if (st.nextBlink <= 0) { startBlink(); st.nextBlink = 2 + Math.random() * 3.6; st.dbl = Math.random() < 0.15; }
    let blink = 0;
    if (st.blinkT >= 0) {
      st.blinkT += dt;
      blink = Math.sin(Math.PI * clamp(st.blinkT / 0.17, 0, 1));
      if (st.blinkT > 0.17) { st.blinkT = -1; if (st.dbl) { st.dbl = false; st.nextBlink = 0.1; } }
    }
    // talking mouth
    if (T < st.talkUntil) {
      const v = Math.abs(Math.sin(T * 11.5)) * (0.55 + 0.45 * Math.sin(T * 3.3 + 1.1));
      st.mouth = damp(st.mouth, 0.12 + 0.8 * v, 28, dt);
    } else st.mouth = damp(st.mouth, 0, 14, dt);
    // nod
    let nod = 0;
    if (st.nodT >= 0) { st.nodT += dt; nod = 0.16 * Math.sin(Math.PI * clamp(st.nodT / 0.55, 0, 1)); if (st.nodT > 0.55) st.nodT = -1; }

    // apply pose
    const breathe = Math.sin(T * 1.6);
    upper.position.y = 0.95 + breathe * 0.0018;
    upper.rotation.set(0.11 * st.bow, st.yaw * 0.12, Math.sin(T * 0.6) * 0.008);
    headPivot.rotation.set(st.pitch + 0.24 * st.bow + nod, st.yaw * 0.88, Math.sin(T * 0.5) * 0.025 - st.yaw * 0.05, 'YXZ');
    neck.rotation.set((st.pitch + 0.24 * st.bow) * 0.3, st.yaw * 0.3, 0);
    for (const A of arms) poseArm(A, st.arm, (1 - st.arm) * breathe * 0.003);

    const gx = clamp((st.eyeYaw - st.yaw) / 0.3, -1, 1), gy = clamp(-(st.eyePitch - st.pitch) / 0.25, -1, 1);
    const face = { gx, gy, lid: clamp(Math.max(blink, st.closed), 0, 1), mouth: clamp(st.mouth, 0, 1), smile: clamp(st.smile, 0, 1.2), brow: clamp(st.brow, -1, 1) };
    const key = [face.gx, face.gy, face.lid, face.mouth, face.smile, face.brow].map(v => Math.round(v * 40)).join(',');
    if (key !== lastFaceKey) { lastFaceKey = key; drawFace(face); }
  }
  let lastFaceKey = '';

  /* ---------- size, loop ---------- */
  function resize() {
    const r = canvas.getBoundingClientRect();
    const w = Math.max(60, Math.round(r.width)), h = Math.max(80, Math.round(r.height));
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    const dist = camera.position.distanceTo(AIM);
    U.outline.value = (2 * dist * Math.tan(camera.fov * DEG / 2) / h) * (h < 240 ? 0.95 : 1.2);
  }
  resize();
  if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas); else window.addEventListener('resize', resize);

  let last = performance.now();
  function loop() {
    requestAnimationFrame(loop);
    const now = performance.now();
    const dt = clamp((now - last) / 1000, 0, 0.1); last = now;
    if (st.paused) return;
    update(dt);
    renderer.render(scene, camera);
  }
  update(0); renderer.render(scene, camera);
  requestAnimationFrame(loop);

  return {
    namaste() { return new Promise(res => { st.seq = { t: 0, dur: 4.2, done: res }; }); },
    talk(ms) { st.talkUntil = st.time + ms / 1000; },
    pointer(x, y) { st.px = x; st.py = y; st.pointerT = st.time; },
    focus(yaw, pitch, ms) { st.focus = [yaw, pitch]; st.focusUntil = st.time + ms / 1000; st.pointerT = -99; },
    nod() { st.nodT = 0; },
    excite(on) { st.exciteT = on ? 1 : 0; },
    setPaused(p) { st.paused = !!p; if (!p) last = performance.now(); },
    resize,
    _debug: { st, scene, camera, renderer }
  };
}
