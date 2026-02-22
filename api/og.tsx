import { ImageResponse } from '@vercel/og';

export const config = { runtime: 'edge' };

export default async function handler(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Untitled';

  // Fetch the background image and Space Grotesk font in parallel
  const [bgImageData, fontData] = await Promise.all([
    fetch(new URL('../public/og-image-bg.png', import.meta.url)).then((r) =>
      r.arrayBuffer()
    ),
    fetch(
      'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gozuenF.woff'
    ).then((r) => r.arrayBuffer()),
  ]);

  const bgBase64 = `data:image/png;base64,${Buffer.from(bgImageData).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgBase64}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            objectFit: 'cover',
          }}
          alt=""
        />

        {/* Title overlay — vertically centred, left-aligned */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1200px',
            height: '630px',
            display: 'flex',
            alignItems: 'center',       // vertical centre
            justifyContent: 'flex-start', // left align
            paddingLeft: '80px',
            paddingRight: '500px',      // leave right side clear (gradient area)
            boxSizing: 'border-box',
          }}
        >
          <span
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '64px',
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </span>
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
      headers: {
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    }
  );
}