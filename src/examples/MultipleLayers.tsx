import React from "react";
import LinearGradient from "../components/LinearGradient";

export default function MultipleLayers() {
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
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          borderRadius: "2rem",
        }}
      >
        <LinearGradient
          start={[50, 0]}
          end={[50, 100]}
          startColor="#4287f5"
          endColor="#bf42f5"
          turbulenceOptions={{
            baseFrequency: 10,
            numOctaves: 2,
          }}
        />
        <LinearGradient
          start={[40, 70]}
          end={[80, 100]}
          endColor="#e0f542"
          turbulenceOptions={{
            baseFrequency: 10,
            numOctaves: 2,
          }}
        />
        <LinearGradient
          start={[70, 80]}
          end={[0, 0]}
          endColor="#fcba03"
          turbulenceOptions={{
            baseFrequency: 10,
            numOctaves: 2,
          }}
        />
      </svg>
    </div>
  );
}
