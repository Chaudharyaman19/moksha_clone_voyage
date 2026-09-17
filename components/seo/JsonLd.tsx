type JsonLdProps = {
  data?: Record<string, unknown> | string | null;
};

export default function JsonLd({ data }: JsonLdProps) {
  if (!data) return null;
  const content = typeof data === "string" ? data : JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
