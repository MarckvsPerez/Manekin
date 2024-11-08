import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import "./index.css";
import CustomCursor from "./components/CustomCursor.tsx";
import { PageViewProvider } from "./context/FirstLoad.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <PageViewProvider>
        <CustomCursor />
        <App />
      </PageViewProvider>
    </BrowserRouter>
  </StrictMode>
);
