import LinearGradient from "../components/LinearGradient";
import RadialGradient from "../components/RadialGradient";
import React from "react";

export default function Torus() {
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
        border: '1px solid #363436'
      }}
    >
      <svg
        width="400"
        height="400"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="outer-gradient-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />
          <circle cx="50%" cy="50%" r="28" fill="white" />
        </mask>

        <circle cx="50%" cy="50%" r="45" fill="white" />
        <RadialGradient
          start={[50, 50]}
          end={[25, 25]}
          startColor="white"
          endColor="transparent"
          startRadius={14}
          standardDeviation={0}
        />
        <circle cx="50%" cy="50%" r="25" fill="black" />
        <RadialGradient
          start={[50, 50]}
          end={[50, 70]}
          startColor="#141314"
          endColor="white"
          slotProps={{
            mask: "url(#outer-gradient-mask)",
          }}
        />
        <LinearGradient
          start={[20, 0]}
          end={[80, 110]}
          startColor="transparent"
          endColor="#141314"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
        />
      </svg>
    </div>
  );
}
