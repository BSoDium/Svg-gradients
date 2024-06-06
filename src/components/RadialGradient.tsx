import React, { useMemo } from "react";
import { GradientProps, limits, norm } from "./Gradient";


export default function RadialGradient({
  start,
  end,
  startColor = "grey",
  endColor = "transparent",
  turbulenceOptions = {
    baseFrequency: 1,
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
  const scale = norm(vector);
  const shift = scale / 8;
  const r = scale / 2;

  const turbulenceFilterId = useMemo(
    () => Math.random().toString(36).slice(2),
    []
  );
  const blurFilterId = useMemo(() => Math.random().toString(36).slice(2), []);

  return (
    <>
      <filter id={turbulenceFilterId} width="200%" height="200%">
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
        <rect
          className="grain"
          width="800%"
          height="800%"
          x="-350%"
          y="-350%"
          fill={endColor}
        />
        <circle
          className="grain"
          cx={`${start[0] - shift}%`}
          cy={`${start[1] - shift}%`}
          r={`${r}%`}
          fill={startColor}
          style={{
            filter: `url(#${turbulenceFilterId})`,
          }}
        />
      </g>
      {debug ? (
        <>
          <circle
            className="indicator"
            cx={`${start[0]}%`}
            cy={`${start[1]}%`}
            r={`${r}%`}
            fill="transparent"
            stroke="grey"
            strokeWidth=".3"
            stroke-dasharray="1"
          />
          <line
            className="indicator"
            x1={`${start[0]}%`}
            y1={`${start[1]}%`}
            x2={`${end[0]}%`}
            y2={`${end[1]}%`}
            stroke="grey"
          />
          <circle
            className="indicator"
            cx={`${start[0]}%`}
            cy={`${start[1]}%`}
            r="2%"
            fill="white"
            stroke="grey"
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
            stroke="grey"
          />
          <text x={`${end[0] + 4}%`} y={`${end[1] + 1}%`}>
            End
          </text>
        </>
      ) : null}
    </>
  );
}
