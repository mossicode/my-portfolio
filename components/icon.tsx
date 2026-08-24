// app/icon.tsx
import { ImageResponse } from "next/og";
import { Caravan } from "lucide-react";

export const runtime = "edge";

// Image metadata
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: "black", // Or your portfolio theme color
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "6px",
        }}
      >
        {/* Render your lucide icon inside the dynamic image wrapper */}
        <Caravan width={24} height={24} />
      </div>
    ),
    { ...size }
  );
}
