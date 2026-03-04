export default function Home() {
  const ogUrl = `/api/og?title=What+We+Shipped+%2300&f1=Feature+1&f2=Feature+2&f3=Feature+3`;

  return (
    <div style={{ fontFamily: "var(--font-geist-sans)", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>OG Image Generator</h1>
      <p>
        Pass <code>title</code>, <code>f1</code>, <code>f2</code>, <code>f3</code> query params to{" "}
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
        {`/api/og?title=What+We+Shipped+%2300&f1=Feature+1&f2=Feature+2&f3=Feature+3`}
      </pre>
    </div>
  );
}
