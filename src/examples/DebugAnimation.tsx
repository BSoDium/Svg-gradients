import React, { useEffect, useState } from "react";
import LinearGradient from "../components/LinearGradient";

export default function DebugAnimation() {
  const [start, seStart] = useState<[number, number]>([50, 0]);
  const [end, setEnd] = useState<[number, number]>([50, 100]);

  useEffect(() => {
    const interval = setInterval(() => {
      const t = new Date().getTime();
      const amplitude = 35 + 15 * Math.sin(t / 1000);
      seStart([
        amplitude + amplitude * Math.sin(t / 2000),
        amplitude + amplitude * Math.cos(t / 2000),
      ]);
      setEnd([
        amplitude + amplitude * Math.sin(t / 2000 + Math.PI),
        amplitude + amplitude * Math.cos(t / 2000 + Math.PI),
      ]);
    }, 200);

    return () => clearInterval(interval);
  });

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
        style={{}}
      >
        <LinearGradient
          start={start}
          end={end}
          startColor="#6e6efe"
          endColor="#fe1efe"
          turbulenceOptions={{
            baseFrequency: 2,
            numOctaves: 2,
          }}
          debug
        />
      </svg>
    </div>
  );
}
