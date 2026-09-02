import { ImageResponse } from "next/og";
import { profile } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
            "linear-gradient(135deg, #05070d 0%, #0a0e1a 55%, #0d1220 100%)",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#38bdf8", fontSize: 28, marginBottom: 28 }}>
          {"<Anderson />"}
        </div>

        <div
          style={{
            display: "flex",
            color: "#e6ebf5",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            display: "flex",
            color: "#38bdf8",
            fontSize: 34,
            marginTop: 22,
          }}
        >
          {profile.role}
        </div>

        <div
          style={{
            display: "flex",
            color: "#8b96ad",
            fontSize: 26,
            marginTop: 28,
          }}
        >
          Automação · APIs REST · Full Stack · n8n
        </div>
      </div>
    ),
    { ...size }
  );
}
