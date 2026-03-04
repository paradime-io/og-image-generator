export default function Home() {
  const previewTitle = "Hello World";
  const previewDescription = "This is a dynamically generated OG image";
  const ogUrl = `/api/og?title=${encodeURIComponent(previewTitle)}&description=${encodeURIComponent(previewDescription)}`;

  return (
    <div style={{ fontFamily: "var(--font-geist-sans)", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>OG Image Generator</h1>
      <p>
        Pass <code>title</code> and <code>description</code> query params to{" "}
        <code>/api/og</code> to generate an Open Graph image.
      </p>

      <h2>Preview</h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ogUrl}
        alt="OG Image Preview"
        width={1200}
        height={630}
        style={{ width: "100%", height: "auto", borderRadius: "8px", border: "1px solid #ccc" }}
      />

      <h2>Usage</h2>
      <pre style={{ background: "#f4f4f4", padding: "1rem", borderRadius: "8px", overflowX: "auto" }}>
        {`<meta property="og:image" content="https://your-domain.com/api/og?title=Your+Title&description=Your+Description" />`}
      </pre>
    </div>
  );
}
