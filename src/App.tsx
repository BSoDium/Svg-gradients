import { useEffect, useState } from "react";
import LinearGradient, { limits } from "./components/LinearGradient";
import "./styles.css";
import Sparkle from "./examples/Sparkle";
import Banner from "./examples/Banner";
import Flower from "./examples/Flower";

export default function App() {
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
    }, 50);

    return () => clearInterval(interval);
  });

  return (
    <div className="container">
      <Banner />
      <svg
        width="400"
        height="400"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          border: "1px solid grey",
          borderRadius: "2rem",
        }}
      >
        <LinearGradient
          start={start}
          end={end}
          startColor="#6e6e6e"
          endColor="#ffffff"
          turbulenceOptions={{
            baseFrequency: 2,
            numOctaves: 2,
          }}
          debug
        />
      </svg>
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
          start={[50, 100]}
          end={[0, 20]}
          endColor="#fcba03"
          turbulenceOptions={{
            baseFrequency: 10,
            numOctaves: 2,
          }}
        />
      </svg>
      <Sparkle />
      <Flower />
    </div>
  );
}
