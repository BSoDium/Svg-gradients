![alt text](assets/banner.png)

# SVG Gradients

This repository contains a collection of experiments with SVG turbulence-based gradients.

## Usage

The `LinearGradient` component is designed to be used as a drop-in replacement for the standard `linearGradient` element in SVG. Its expected usage is thoroughly documented in the source code, along with a few examples, which can be found in the `examples` directory.

## Installation

To set up the demo, clone the repository and run the following commands:

```sh
yarn install
yarn dev
```

## Examples

The following examples demonstrate possible use cases for the `LinearGradient` component:

- [Banner](./src/examples/Banner.tsx) - a simple material you banner with a gradient background
- [Debug animation](./src/examples/DebugAnimation.tsx) - a debug animation that visualizes the turbulence field and its boundaries
- [Flower](./src/examples/Flower.tsx) - a flower-like primitive shape with a gradient background
- [Multiple layers](./src/examples/MultipleLayers.tsx) - a composition of multiple layers with different turbulence settings and colors
- [Sparkle](./src/examples/Sparkle.tsx) - a simple sparkle animation with a gradient background
- [Text](./src/examples/Text.tsx) - a text element with a gradient background