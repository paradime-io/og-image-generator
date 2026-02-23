import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Untitled';

  // Fetch Space Grotesk font
  const fontData = await fetch(
    'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gozuenF.woff'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '80px',
          paddingRight: '500px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <div
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: 64,
            fontWeight: 700,
            color: 'white',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            display: 'flex',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Space Grotesk',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
      ],
    }
  );
}
