import React from "react";
import "./styles.css";
import Sparkle from "./examples/Sparkle";
import Banner from "./examples/Banner";
import Flower from "./examples/Flower";
import DebugAnimationLinear from "./examples/DebugAnimationLinear";
import MultipleLayers from "./examples/MultipleLayers";
import Text from "./examples/Text";
import Arch from "./examples/Arch";
import Torus from "./examples/Torus";
import Abstract from "./examples/Abstract";
import DebugAnimationRadial from "./examples/DebugAnimationRadial";

export default function App() {
  return (
    <div className="container">
      <Banner />
      <DebugAnimationLinear />
      <DebugAnimationRadial />
      <MultipleLayers />
      <Sparkle />
      <Flower />
      <Text />
      <Arch />
      <Torus />
      <Abstract />
    </div>
  );
}
