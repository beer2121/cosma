import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "COSMA Solution — Technology Partner";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #fafafc 0%, #f3f0ff 45%, #eefcff 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              display: "flex",
            }}
          >
            <span style={{ color: "#5B3DF5" }}>CO</span>
            <span style={{ color: "#F5A623" }}>S</span>
            <span style={{ color: "#5B3DF5" }}>MA</span>
          </div>
        </div>
        <p
          style={{
            fontSize: 28,
            color: "#1B1238",
            lineHeight: 1.35,
            maxWidth: "820px",
            margin: 0,
            fontWeight: 600,
          }}
        >
          Technology Partner for Modern Business
        </p>
        <p
          style={{
            fontSize: 20,
            color: "#6B6680",
            lineHeight: 1.5,
            maxWidth: "780px",
            marginTop: "20px",
            marginBottom: 0,
          }}
        >
          One Partner. Every Solution.
        </p>
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(91, 61, 245, 0.12)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
