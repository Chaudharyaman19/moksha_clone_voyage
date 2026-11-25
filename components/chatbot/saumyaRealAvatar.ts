/* Saumya's avatar on the chat launcher: a drawn woman (her layers are public/moksha-chatbot/saumya-real.svg, from the
   designer's page public/moksha-ai-assistant-real.html) who rises with a namaste, blinks, glances around, moves her
   lips while the bubble talks, bows, and turns a little towards the pointer. Each layer is shown or hidden by a class
   or data-v on the SVG (see SaumyaAvatar.css); her head and body follow --mx / --my / --tilt on the launcher. */

export type RealAvatar = {
  /** Arms open, then hands join and she bows; resolves when the bubble should appear */
  namaste: () => Promise<void>;
  /** Lips move (and she glances around) for this long */
  talk: (ms: number) => void;
  nod: () => void;
  /** Stops drawing while the chat is open */
  setPaused: (paused: boolean) => void;
  destroy: () => void;
};

const MOUTHS = [0, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5]; // mouth shapes, the open ones more often
const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const clamp = (v: number) => Math.max(-1, Math.min(1, v));

export const startAvatar = (root: HTMLElement, fig: SVGSVGElement): RealAvatar => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let destroyed = false;
  let paused = false;
  const timers = new Set<ReturnType<typeof setTimeout>>();
  const later = (fn: () => void, ms: number) => {
    const t = setTimeout(() => {
      timers.delete(t);
      if (!destroyed) fn();
    }, ms);
    timers.add(t);
    return t;
  };
  const cancel = (t?: ReturnType<typeof setTimeout>) => {
    if (!t) return;
    clearTimeout(t);
    timers.delete(t);
  };
  const flag = (cls: string, on: boolean) => fig.classList.toggle(cls, on);
  // A one-off animation, restarted if it was already running
  const pulse = (cls: string, ms: number) => {
    fig.classList.remove(cls);
    void fig.getBoundingClientRect();
    fig.classList.add(cls);
    later(() => fig.classList.remove(cls), ms);
  };

  // Blinking, now and then twice
  const blink = () => {
    if (paused || fig.classList.contains("mv-eyes-closed")) return;
    flag("mv-blinking", true);
    later(() => flag("mv-blinking", false), 130);
  };
  const blinkLoop = () =>
    later(() => {
      blink();
      if (Math.random() < 0.15) later(blink, 260);
      blinkLoop();
    }, rnd(2600, 5600));
  blinkLoop();

  // Where she looks: eyes to a side (mv-look-l / -r), the head following, a small tilt
  const look = { x: 0, y: 0, tilt: 0, gaze: 0 };
  let lookTimer: ReturnType<typeof setTimeout> | undefined;
  let intro = false;
  const setGaze = (g: number) => {
    flag("mv-look-l", g < 0);
    flag("mv-look-r", g > 0);
    look.gaze = g;
  };
  const idleLook = () => {
    if (talking || intro || paused) {
      lookTimer = later(idleLook, 1500);
      return;
    }
    if (Math.random() < 0.45) {
      const side = Math.random() < 0.5 ? -1 : 1;
      look.x = side * rnd(0.3, 0.5);
      look.y = rnd(-0.1, 0.05);
      setGaze(side);
      later(() => {
        if (talking) return;
        look.x = rnd(-0.08, 0.08);
        look.y = 0;
        setGaze(0);
      }, rnd(700, 1300));
    } else {
      look.x = rnd(-0.15, 0.15);
      look.y = rnd(-0.08, 0.08);
      setGaze(0);
    }
    look.tilt = rnd(-1.2, 1.2);
    lookTimer = later(idleLook, rnd(3200, 6500));
  };
  const talkLook = () => {
    if (!talking) return;
    if (Math.random() < 0.38) {
      const side = Math.random() < 0.5 ? -1 : 1;
      look.x = side * rnd(0.4, 0.7);
      look.y = rnd(-0.2, 0.08);
      setGaze(side);
    } else {
      look.x = rnd(-0.22, 0.22);
      look.y = rnd(-0.12, 0.14);
      setGaze(0);
    }
    look.tilt = rnd(-2.2, 2.2);
    if (Math.random() < 0.35) {
      flag("mv-brow-up", true);
      later(() => flag("mv-brow-up", false), rnd(350, 600));
    }
    if (Math.random() < 0.35) pulse("mv-nodlet", 620);
    lookTimer = later(talkLook, rnd(850, 1600));
  };
  lookTimer = later(idleLook, 4000);

  // Talking: a new mouth shape every 75–135 ms, never the same twice in a row
  let talking = false;
  let talkEnd = 0;
  let mouthTimer: ReturnType<typeof setTimeout> | undefined;
  let lastMouth = 0;
  const endTalk = () => {
    cancel(lookTimer);
    look.x = rnd(-0.06, 0.06);
    look.y = 0;
    look.tilt = rnd(-0.8, 0.8);
    setGaze(0);
    lookTimer = later(idleLook, rnd(1800, 3200));
  };
  const mouthStep = () => {
    if (!talking || performance.now() > talkEnd) {
      fig.setAttribute("data-v", "0");
      if (talking) {
        talking = false;
        endTalk();
      }
      return;
    }
    let v: number;
    do v = MOUTHS[Math.floor(Math.random() * MOUTHS.length)];
    while (v === lastMouth);
    lastMouth = v;
    fig.setAttribute("data-v", String(v));
    mouthTimer = later(mouthStep, rnd(75, 135));
  };
  const talk = (ms: number) => {
    if (paused) return;
    talking = true;
    talkEnd = performance.now() + ms;
    cancel(mouthTimer);
    mouthStep();
    flag("mv-brow-up", true);
    later(() => flag("mv-brow-up", false), 520);
    cancel(lookTimer);
    lookTimer = later(talkLook, 350);
  };

  // Namaste: hands join (from open arms), a press, a bow with eyes closed
  const bow = () => {
    pulse("mv-bowing", 1450);
    later(() => flag("mv-eyes-closed", true), 380);
    later(() => flag("mv-eyes-closed", false), 980);
  };
  const namaste = () =>
    new Promise<void>((resolve) => {
      if (reduced) {
        flag("mv-open", false);
        resolve();
        return;
      }
      intro = true;
      flag("mv-open", true);
      later(() => flag("mv-open", false), 1200);
      later(() => {
        pulse("mv-press", 720);
        bow();
      }, 1950);
      later(resolve, 2250);
      later(() => (intro = false), 3600);
    });

  // Her head turns a little towards the pointer (when she isn't looking elsewhere), with a slow sway
  let mx = 0;
  let my = 0;
  let lastMove = -9999;
  let cx = 0;
  let cy = 0;
  let ct = 0;
  const onPointer = (e: PointerEvent) => {
    const r = fig.getBoundingClientRect();
    mx = clamp((e.clientX - (r.left + r.width / 2)) / (window.innerWidth * 0.5));
    my = clamp((e.clientY - (r.top + r.height * 0.25)) / (window.innerHeight * 0.5));
    lastMove = performance.now();
  };
  window.addEventListener("pointermove", onPointer, { passive: true });
  let frame = 0;
  const draw = (now: number) => {
    let gx = look.x;
    let gy = look.y;
    let gt = look.tilt;
    if (intro) gx = gy = gt = 0;
    else if (!talking && now - lastMove < 2500 && look.gaze === 0) {
      gx = mx * 0.35;
      gy = my * 0.2;
    }
    gx += Math.sin(now / 1900) * 0.04;
    gy += Math.sin(now / 2600) * 0.03;
    cx += (gx - cx) * 0.085;
    cy += (gy - cy) * 0.085;
    ct += (gt - ct) * 0.06;
    root.style.setProperty("--mx", cx.toFixed(3));
    root.style.setProperty("--my", cy.toFixed(3));
    root.style.setProperty("--tilt", ct.toFixed(3));
    frame = requestAnimationFrame(draw);
  };
  if (!reduced) frame = requestAnimationFrame(draw);

  return {
    namaste,
    talk,
    nod: () => pulse("mv-nodlet", 620),
    setPaused: (on) => {
      if (on === paused) return;
      paused = on;
      cancelAnimationFrame(frame);
      frame = 0;
      if (on) {
        talking = false;
        fig.setAttribute("data-v", "0");
      } else if (!reduced) frame = requestAnimationFrame(draw);
    },
    destroy: () => {
      destroyed = true;
      timers.forEach(clearTimeout);
      timers.clear();
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointer);
    },
  };
};
