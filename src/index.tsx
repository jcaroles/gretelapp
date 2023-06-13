import React from "react";
import { createRoot } from "react-dom/client";
import WebComponents from "./web-components";
import "./index.css";

const domNode: any = document.getElementById("root");
const root = createRoot(domNode);
root.render(<WebComponents />);
