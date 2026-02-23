export default function Home() {
  return (
    <div style={{ padding: '50px' }}>
      <h1>OG Image Generator</h1>
      <p>Test: /api/og?title=Hello+World</p>
      <img src="/api/og?title=Welcome+to+Paradime" alt="Example" style={{ maxWidth: '100%', marginTop: '20px' }} />
    </div>
  );
}
