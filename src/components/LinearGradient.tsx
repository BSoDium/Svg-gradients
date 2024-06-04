import React, { ComponentProps, useMemo } from "react";

export const limits = {
  min: -50,
  max: 150,
};

function norm(v: [number, number]) {
  return Math.sqrt(v[0] ** 2 + v[1] ** 2);
}

function angle(v1: [number, number], v2: [number, number]) {
  const dotProduct = v1[0] * v2[0] + v1[1] * v2[1];
  const magnitudeProduct = norm(v1) * norm(v2);
  return Math.acos(dotProduct / magnitudeProduct);
}

function average(v1: [number, number], v2: [number, number], weight = 0.5) {
  return [
    v1[0] * (1 - weight) + v2[0] * weight,
    v1[1] * (1 - weight) + v2[1] * weight,
  ] as [number, number];
}

export default function LinearGradient({
  start,
  end,
  startColor = "transparent",
  endColor = "transparent",
  turbulenceOptions = {
    baseFrequency: 2, // Needs to be chosen relative to the rendering resolution
    numOctaves: 2, // TODO: Change this
  },
  slotProps,
  debug = false,
}: {
  start: [number, number];
  end: [number, number];
  startColor?: string;
  endColor?: string;
  turbulenceOptions?: { baseFrequency: number; numOctaves: number };
  slotProps?: Partial<React.SVGProps<SVGGElement>>;
  debug?: boolean;
}) {
  if (start[0] === end[0] && start[1] === end[1]) return null;
  if ([...start, ...end].some((v) => v < limits.min || v > limits.max))
    return null;

  const vector = [end[0] - start[0], end[1] - start[1]] as [number, number];
  const scale = norm(vector);

  const height = Math.max(4 * scale, 100);
  const width = 4 * height;
  const rotation =
    start[0] < end[0]
      ? 2 * Math.PI - angle([0, 1], vector)
      : angle([0, 1], vector);
  const position = average(start, end, 0.3);

  const filterId = useMemo(() => Math.random().toString(), []);

  return (
    <>
      <filter id={filterId}>
        <feTurbulence
          type="turbulence"
          baseFrequency={turbulenceOptions.baseFrequency}
          numOctaves={turbulenceOptions.numOctaves}
          result="turbulence"
        />
        <feDisplacementMap
          in2="turbulence"
          in="SourceGraphic"
          scale={scale}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>

      <g {...slotProps}>
        {startColor === "transparent" ? null : (
          <rect
            className="grain"
            width={`${width}%`}
            height={`${width}%`}
            x={`${- width / 2}%`}
            y={`${- width / 2}%`}
            fill={startColor}
          />
        )}
        <rect
          className="grain"
          width={`${width}%`}
          height={`${height}%`}
          x={`${position[0] - width / 2}%`}
          y={`${position[1]}%`}
          fill={endColor}
          style={{
            filter: `url(#${filterId})`,
            transformBox: "fill-box",
            transformOrigin: "top center",
            transform: `rotate(${rotation}rad)`,
          }}
        />
      </g>
      {debug ? (
        <>
          <rect
            className="indicator"
            width={`${width}%`}
            height={`${height}%`}
            x={`${position[0] - width / 2}%`}
            y={`${position[1]}%`}
            fill="transparent"
            stroke="black"
            strokeWidth=".3"
            stroke-dasharray="1"
            style={{
              transformBox: "fill-box",
              transformOrigin: "top center",
              transform: `rotate(${rotation}rad)`,
            }}
          />
          <line
            className="indicator"
            x1={`${start[0]}%`}
            y1={`${start[1]}%`}
            x2={`${end[0]}%`}
            y2={`${end[1]}%`}
            stroke="black"
          />
          <circle
            className="indicator"
            cx={`${start[0]}%`}
            cy={`${start[1]}%`}
            r="2%"
            fill="white"
            stroke="black"
          />
          <text x={`${start[0] + 4}%`} y={`${start[1] + 1}%`}>
            Start
          </text>
          <circle
            className="indicator"
            cx={`${end[0]}%`}
            cy={`${end[1]}%`}
            r="2"
            fill="white"
            stroke="black"
          />
          <text x={`${end[0] + 4}%`} y={`${end[1] + 1}%`}>
            End
          </text>
        </>
      ) : null}
    </>
  );
}
