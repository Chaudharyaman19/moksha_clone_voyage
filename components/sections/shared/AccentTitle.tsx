import type { ReactNode } from "react";

/** Section heading with the landing-page two-tone theme: dark text + orange accent part. */
export const ACCENT_COLOR = "#D54200";

export default function AccentTitle({ text, accent }: { text: string; accent?: string }): ReactNode {
  const lines = text.split("\n");
  const multi = lines.length > 1;

  const renderLine = (line: string, isAccentLine: boolean) => {
    if (isAccentLine) return <span style={{ color: ACCENT_COLOR }}>{line}</span>;
    if (accent && line.includes(accent)) {
      const i = line.indexOf(accent);
      return (
        <>
          {line.slice(0, i)}
          <span style={{ color: ACCENT_COLOR }}>{accent}</span>
          {line.slice(i + accent.length)}
        </>
      );
    }
    if (!multi && !accent) {
      const words = line.split(" ");
      if (words.length > 2) {
        const k = Math.max(1, Math.ceil(words.length / 2));
        return (
          <>
            {words.slice(0, words.length - k).join(" ")}{" "}
            <span style={{ color: ACCENT_COLOR }}>{words.slice(words.length - k).join(" ")}</span>
          </>
        );
      }
    }
    return line;
  };

  if (!multi) return <>{renderLine(lines[0], false)}</>;
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block lg:whitespace-nowrap">
          {renderLine(line, !accent && i === lines.length - 1)}
        </span>
      ))}
    </>
  );
}
