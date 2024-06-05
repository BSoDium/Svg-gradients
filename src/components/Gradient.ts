export interface GradientProps {
  /** The start point of the gradient as a percentage of the width and height of the SVG */
  start: [number, number];
  /** The end point of the gradient as a percentage of the width and height of the SVG */
  end: [number, number];
  /** The color of the start of the gradient */
  startColor?: string;
  /** The color of the end of the gradient */
  endColor?: string;
  /** Options for the feTurbulence filter */
  turbulenceOptions?: { 
    /** The base frequency for the noise function. */
    baseFrequency: number; 
    /** The number of octaves that the noise function will generate. */
    numOctaves: number 
  };
  /** Standard deviation for the Gaussian blur post processing filter */
  standardDeviation?: number;
  /** Props to pass to the SVG group element */
  slotProps?: Partial<React.SVGProps<SVGGElement>>;
  /** Whether to display debug information */
  debug?: boolean;
}

/** The limits for the gradient start and end point coordinates */
export const limits = {
  min: -100,
  max: 200,
};

/**
 * Calculate the norm of a vector.
 * @param v The vector
 */
export function norm(v: [number, number]) {
  return Math.sqrt(v[0] ** 2 + v[1] ** 2);
}

/**
 * Calculate the angle between two vectors.
 * @param v1 The first vector
 * @param v2 The second vector
 */
export function angle(v1: [number, number], v2: [number, number]) {
  const dotProduct = v1[0] * v2[0] + v1[1] * v2[1];
  const magnitudeProduct = norm(v1) * norm(v2);
  return Math.acos(dotProduct / magnitudeProduct);
}

/**
 * Calculate the average of two vectors.
 * @param v1 The first vector
 * @param v2 The second vector
 * @param weight The weight to give to the second vector
 */
export function average(v1: [number, number], v2: [number, number], weight = 0.5) {
  return [
    v1[0] * (1 - weight) + v2[0] * weight,
    v1[1] * (1 - weight) + v2[1] * weight,
  ] as [number, number];
}