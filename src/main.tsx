import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "remixicon/fonts/remixicon.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container mx-auto max-w-6xl px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
