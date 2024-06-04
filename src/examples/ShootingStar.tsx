import LinearGradient from "../components/LinearGradient";
import React from "react";

export default function ShootingStar() {
  
  return (
    <div
      style={{
        width: 400,
        height: 550,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        filter: 'drop-shadow(0 0 2rem red)'
      }}
    >
      <svg
        width="200"
        height="400"
        viewBox="0 0 50 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="shootingstar-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />

          <path
            fill="white"
            fill-rule="evenodd"
            d="M 0 25 A 25 25 90 0 1 50 25 L 50 175 L 0 175 Z"
            clip-rule="evenodd"
          ></path>
        </mask>
        <LinearGradient
          start={[50, 100]}
          end={[50, 0]}
          endColor="#d3232f"
          turbulenceOptions={{
            baseFrequency: 2,
            numOctaves: 2,
          }}
          standardDeviation={0.1}
          slotProps={{
            mask: "url(#shootingstar-mask)",
          }}
        />
      </svg>
    </div>
  );
}
