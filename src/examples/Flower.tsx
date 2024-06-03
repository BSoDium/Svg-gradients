import React from "react";
import LinearGradient from "../components/LinearGradient";

export default function Flower() {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="flower-mask">
        <rect x="0" y="0" width="100" height="100" fill="black" />

        <path
          fill="white"
          fill-rule="evenodd"
          d="M50.714 0h-50v50c0 25.462 19.033 46.479 43.647 49.6C19.401 102.402 0 123.578 0 149.286v50h50c25.462 0 46.479-19.033 49.6-43.647 2.802 24.96 23.978 44.361 49.686 44.361h50v-50c0-25.462-19.033-46.479-43.647-49.6C180.599 97.598 200 76.422 200 50.714v-50h-50c-25.462 0-46.479 19.033-49.6 43.647C97.598 19.401 76.422 0 50.714 0Z"
          clip-rule="evenodd"
        ></path>
      </mask>
      <LinearGradient
        start={[-50, 150]}
        end={[120, -20]}
        startColor="#d3232f"
        endColor="#ffc7c5"
        turbulenceOptions={{
          baseFrequency: 1.9,
          numOctaves: 2,
        }}
        slotProps={{
          mask: "url(#flower-mask)",
        }}
      />
    </svg>
  );
}
