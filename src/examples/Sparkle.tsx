import React from "react";
import LinearGradient from "../components/LinearGradient";

export default function Sparkle() {
  return (
    <div
      style={{
        width: 400,
        height: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "2rem",
      }}
    >
      <svg
        width="400"
        height="400"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="sparkle-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />

          <path
            fill="white"
            fill-rule="evenodd"
            d="M100 0c3.395 53.76 46.24 96.605 100 100-53.76 3.395-96.605 46.24-100 100-3.395-53.76-46.24-96.605-100-100C53.76 96.605 96.605 53.76 100 0Z"
          />
        </mask>
        <LinearGradient
          start={[0, 0]}
          end={[100, 100]}
          startColor="#d66675"
          endColor="#4c83f0"
          turbulenceOptions={{
            baseFrequency: 1,
            numOctaves: 2,
          }}
          slotProps={{
            mask: "url(#sparkle-mask)",
          }}
        />
      </svg>
    </div>
  );
}
