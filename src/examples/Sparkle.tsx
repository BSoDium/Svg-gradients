import React from "react";
import LinearGradient from "../components/LinearGradient";

export default function Sparkle() {
  return (
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
        start={[0, 100]}
        end={[100, 0]}
        startColor="#4c83f0"
        endColor="#d66675"
        turbulenceOptions={{
          baseFrequency: 2,
          numOctaves: 5,
        }}
        slotProps={{
          mask: "url(#sparkle-mask)",
        }}
      />
    </svg>
  );
}
