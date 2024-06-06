import React from "react";
import LinearGradient from "../components/LinearGradient";

export default function Text() {
  return (
    <div
      style={{
        width: 816,
        height: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "2rem",
        background: "linear-gradient(45deg, #061533, #2e090e)",
        border: "1px solid #402f31",
      }}
    >
      <svg
        width="816"
        height="400"
        viewBox="0 0 204 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="text-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />
          <text
            x="10%"
            y="60%"
            fontFamily='"Roboto", sans-serif'
            fontSize="2rem"
            fontWeight="600"
            fill="white"
          >
            Good day
          </text>
        </mask>
        <LinearGradient
          start={[0, 100]}
          end={[100, 0]}
          startColor="#4c83f0"
          endColor="#d66675"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          slotProps={{
            mask: "url(#text-mask)",
          }}
        />
      </svg>
    </div>
  );
}
