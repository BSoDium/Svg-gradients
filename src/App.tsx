import { useEffect, useState } from "react";
import LinearGradient, { limits } from "./components/LinearGradient";
import "./styles.css";
import Sparkle from "./examples/Sparkle";
import Banner from "./examples/Banner";
import Flower from "./examples/Flower";
import DebugAnimation from "./examples/DebugAnimation";
import MultipleLayers from "./examples/MultipleLayers";
import Text from "./examples/Text";

export default function App() {
  return (
    <div className="container">
      <Banner />
      <DebugAnimation />
      <MultipleLayers />
      <Sparkle />
      <Flower />
      <Text />
    </div>
  );
}
