import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
import frameSkin from "./images/Frame 33.png";
import beadSkin from "./images/Vector 6.png";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App frameSkin={frameSkin} beadSkin={beadSkin} />
  </StrictMode>
);
