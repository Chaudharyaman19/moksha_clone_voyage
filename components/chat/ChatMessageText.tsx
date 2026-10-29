import React from "react";

// Minimal, safe markdown: [text](https://… or /page), bare https:// links, **bold**, "- " bullets
const INLINE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)|\*\*([^*]+)\*\*|(https?:\/\/[^\s)]+)/g;

const renderInline = (text: string, keyPrefix: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const match of text.matchAll(INLINE)) {
    const start = match.index ?? 0;
    if (start > last) nodes.push(text.slice(last, start));
    const [, linkText, linkUrl, bold, bareUrl] = match;
    const key = `${keyPrefix}-${i++}`;
    const href = linkUrl || bareUrl;
    if (href) {
      // Pages of this site open in the same tab
      const external = /^https?:\/\//i.test(href);
      nodes.push(
        <a
          key={key}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="break-words font-semibold text-[#8B6A3E] underline underline-offset-2 hover:text-[#73532F]"
        >
          {linkText || bareUrl}
        </a>
      );
    } else if (bold) {
      nodes.push(<strong key={key}>{bold}</strong>);
    }
    last = start + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
};

const ChatMessageText: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text.split("\n").map((line, idx) => {
      const bullet = /^\s*[-*•]\s+/.test(line);
      const content = bullet ? line.replace(/^\s*[-*•]\s+/, "") : line;
      if (!content.trim()) return <div key={idx} className="h-2" />;
      return (
        <div key={idx} className={bullet ? "flex gap-1.5" : undefined}>
          {bullet && <span aria-hidden="true">•</span>}
          <span>{renderInline(content, String(idx))}</span>
        </div>
      );
    })}
  </>
);

export default ChatMessageText;
