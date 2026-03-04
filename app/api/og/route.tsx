import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const spaceGroteskBold = fetch(
  new URL("./fonts/SpaceGrotesk-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const spaceGroteskRegular = fetch(
  new URL("./fonts/SpaceGrotesk-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const bgImage = fetch(new URL("./og-image-bg.png", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "What We Shipped";
  const features: string[] = [];
  for (let i = 1; i <= 3; i++) {
    const f = searchParams.get(`f${i}`);
    if (f) features.push(f);
  }

  const [boldFont, regularFont, bg] = await Promise.all([
    spaceGroteskBold,
    spaceGroteskRegular,
    bgImage,
  ]);

  const bgBase64 = `data:image/png;base64,${Buffer.from(bg).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        {/* Background image */}
        <img
          src={bgBase64}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Content overlay */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            padding: "80px",
            fontFamily: "Space Grotesk",
          }}
        >
          {/* Title */}
          <div
            style={{
              display: "flex",
              maxWidth: "80%",
              marginBottom: features.length > 0 ? "32px" : "0",
            }}
          >
            <h1
              style={{
                fontSize: "72px",
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {title}
            </h1>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: "40px",
                    marginBottom: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#1a1a1a",
                      marginRight: "12px",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: 400,
                      color: "#1a1a1a",
                    }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Space Grotesk",
          data: boldFont,
          weight: 700,
          style: "normal",
        },
        {
          name: "Space Grotesk",
          data: regularFont,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
