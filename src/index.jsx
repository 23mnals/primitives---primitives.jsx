import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Primitives } from "./screens/Primitives/Primitives";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Primitives />
  </StrictMode>,
);
