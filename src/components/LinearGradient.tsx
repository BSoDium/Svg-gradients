import React, { useMemo } from "react";
import { angle, average, GradientProps, limits, norm } from "./Gradient";

export default function LinearGradient({
  start,
  end,
  startColor = "transparent",
  endColor = "transparent",
  turbulenceOptions = {
    baseFrequency: 2,
    numOctaves: 2,
  },
  standardDeviation = 0.1,
  slotProps,
  debug = false,
}: GradientProps) {
  if (start[0] === end[0] && start[1] === end[1]) return null;
  if ([...start, ...end].some((v) => v < limits.min || v > limits.max))
    return null;

  const vector = [end[0] - start[0], end[1] - start[1]] as [number, number];
  /** The scale is used to determine the intensity of the displacement filter. */
  const scale = norm(vector);
  /** The shift compensates for the displacement filter's origin being at the top left corner of the element. */
  const shift = scale / 4;

  const height = Math.max(4 * scale, 100);
  const width = 4 * height;
  const rotation =
    start[0] < end[0]
      ? 2 * Math.PI - angle([0, 1], vector)
      : angle([0, 1], vector);
  const position = average(start, end);

  const turbulenceFilterId = useMemo(
    () => Math.random().toString(36).slice(2),
    []
  );
  const blurFilterId = useMemo(() => Math.random().toString(36).slice(2), []);
  const maskId = useMemo(() => Math.random().toString(36).slice(2), []);

  const backgroundFill = endColor === "transparent" ? endColor : startColor;
  const foregroundFill = endColor === "transparent" ? startColor : endColor;
  const reverse = endColor === "transparent";

  return (
    <>
      <filter
        id={turbulenceFilterId}
        width={`calc(100% + ${2 * scale}px`}
        height={`calc(100% + ${2 * scale}px`}
      >
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
      <filter id={blurFilterId}>
        <feGaussianBlur in="SourceGraphic" stdDeviation={standardDeviation} />
      </filter>

      <g {...slotProps} filter={`url(#${blurFilterId})`}>
        <mask id={maskId}>
          <rect x="0" y="0" width={`${width}%`} height={`${width}%`} fill="white" />
          <rect
            width={`${width}%`}
            height={`${height}%`}
            x={`calc(${position[0] - width / 2}% - ${shift}px)`}
            y={`calc(${position[1]}% - ${shift}px)`}
            fill="black"
            style={{
              filter: `url(#${turbulenceFilterId})`,
              transformBox: "fill-box",
              transformOrigin: `calc(50% + ${shift}px) ${shift}px`,
              transform: `rotate(${rotation + (reverse ? Math.PI : 0)}rad)`,
            }}
          />
        </mask>
        <rect
          className="grain"
          width={`${width}%`}
          height={`${width}%`}
          x={`${-width / 2}%`}
          y={`${-width / 2}%`}
          fill={backgroundFill}
          mask={`url(#${maskId})`}
        />
        <rect
          className="grain"
          width={`${width}%`}
          height={`${height}%`}
          x={`calc(${position[0] - width / 2}% - ${shift}px)`}
          y={`calc(${position[1]}% - ${shift}px)`}
          fill={foregroundFill}
          style={{
            filter: `url(#${turbulenceFilterId})`,
            transformBox: "fill-box",
            transformOrigin: `calc(50% + ${shift}px) ${shift}px`,
            transform: `rotate(${rotation + (reverse ? Math.PI : 0)}rad)`,
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
