import LinearGradient from "../components/LinearGradient";
import RadialGradient from "../components/RadialGradient";
import React from "react";

export default function Abstract() {
  return (
    <div
      style={{
        width: 816,
        height: 816,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "2rem",
        border: "1px solid #363436",
        backgroundColor: "#c4c4c4",
      }}
    >
      <svg
        width="816"
        height="816"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="upper-large-circle-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />
          <circle cx="49.5%" cy="40%" r="38" fill="white" />
        </mask>
        <mask id="upper-small-circle-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />
          <circle cx="49.5%" cy="40%" r="20" fill="white" />
        </mask>
        <mask id="lower-large-circle-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />
          <circle cx="49.5%" cy="62%" r="38" fill="white" />
          <rect x="0" y="0" width="49.5%" height="62%" fill="black" />
        </mask>
        <mask id="lower-small-circle-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />
          <circle cx="49.5%" cy="62%" r="20" fill="white" />
          <rect x="0" y="0" width="49.5%" height="62%" fill="black" />
        </mask>
        <mask id="lower-large-quarter-circle-mask">
          <rect x="0" y="0" width="100" height="100" fill="black" />
          <circle cx="49.5%" cy="62%" r="38" fill="white" />
          <rect x="0" y="0" width="49.5%" height="100%" fill="black" />
          <rect x="0" y="0" width="100%" height="62%" fill="black" />
        </mask>

        <RadialGradient
          start={[95, 40]}
          end={[20, 40]}
          startColor="#c4c4c4"
          endColor="#1b1b1b"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#upper-large-circle-mask)",
          }}
        />
        <RadialGradient
          start={[50, 40]}
          end={[32, 40]}
          startColor="#c4c4c4"
          endColor="transparent"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#upper-large-circle-mask)",
          }}
        />
        <RadialGradient
          start={[85, 40]}
          end={[20, 40]}
          startColor="#1b1b1b"
          endColor="#c4c4c4"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#upper-small-circle-mask)",
          }}
        />
        <RadialGradient
          start={[45, 35]}
          end={[49.5, 80]}
          startColor="#1b1b1b"
          endColor="transparent"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#lower-large-circle-mask)",
          }}
        />
        <RadialGradient
          start={[20, 100]}
          end={[49.5, 30]}
          startColor="#1b1b1b"
          endColor="transparent"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#lower-large-circle-mask)",
          }}
        />
        <RadialGradient
          start={[49.5, 62]}
          end={[49.5, 78]}
          startColor="transparent"
          endColor="#1b1b1b"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#lower-small-circle-mask)",
          }}
        />
        <RadialGradient
          start={[44.5, 57]}
          end={[69.5, 82]}
          startColor="transparent"
          endColor="#121212"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#lower-large-quarter-circle-mask)",
          }}
        />
        <RadialGradient
          start={[44.5, 57]}
          end={[64.5, 77]}
          startColor="#121212"
          endColor="transparent"
          turbulenceOptions={{
            baseFrequency: 1.9,
            numOctaves: 2,
          }}
          standardDeviation={0}
          slotProps={{
            mask: "url(#lower-large-quarter-circle-mask)",
          }}
        />
      </svg>
    </div>
  );
}
