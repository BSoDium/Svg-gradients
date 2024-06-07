import React from "react";
import LinearGradient from "../components/LinearGradient";
import { PiPlanetFill } from "react-icons/pi";

export default function Banner() {
  return (
    <div
      style={{
        width: 816,
        height: 400,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "3rem",
      }}
    >
      <svg
        width="816"
        height="400"
        viewBox="0 0 204 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          flexShrink: 0,
        }}
      >
        <LinearGradient
          start={[45, 35]}
          end={[75, 100]}
          startColor="#fde2c9"
          endColor="#ebc8b3"
          turbulenceOptions={{
            baseFrequency: 2,
            numOctaves: 2,
          }}
          standardDeviation={0}
        />
      </svg>
      <div
        style={{
          borderRadius: "100vmax",
          height: "10.5rem",
          width: "10.5rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(to right, #ffffff, transparent 40%)",
        }}
      />
      <div
        style={{
          borderRadius: "100vmax",
          height: "10rem",
          width: "10rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(45deg, #edeff2 25%, #ebd0ba 75%)",
          color: "#2e332e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PiPlanetFill size="5rem" />
      </div>
    </div>
  );
}
