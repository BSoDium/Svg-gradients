import LinearGradient from "../components/LinearGradient";
import React from "react";

export default function Arch() {
  return (
    <div
      style={{
        width: 400,
        height: 550,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "2rem",
        filter: "drop-shadow(0 0 2rem #d3232f)",
        border: "1px solid #363436",
      }}
    >
      <svg
        width="400"
        height="550"
        viewBox="0 0 50 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="shootingstar-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />

          <path
            fill="white"
            fill-rule="evenodd"
            d="M 12.5 25 A 12.5 12.5 90 0 1 37.5 25 L 37.5 100 L 12.5 100 Z"
            clip-rule="evenodd"
          ></path>
        </mask>
        <LinearGradient
          start={[50, 100]}
          end={[50, -20]}
          startColor="transparent"
          endColor="#d3232f"
          turbulenceOptions={{
            baseFrequency: 2,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#shootingstar-mask)",
          }}
        />
      </svg>
    </div>
  );
}
