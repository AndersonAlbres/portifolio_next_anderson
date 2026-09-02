import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070d",
          borderRadius: 7,
        }}
      >
        <span
          style={{
            color: "#38bdf8",
            fontSize: 19,
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: -1,
          }}
        >
          {"</>"}
        </span>
      </div>
    ),
    { ...size }
  );
}
