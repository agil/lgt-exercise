import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { MantineProvider } from "@mantine/core";
import { AppRoutes } from "./AppRoutes.tsx";
import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
