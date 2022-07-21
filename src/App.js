import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import "@elastic/eui/dist/eui_theme_light.css";
import React from "react";
import MainPage from "./components/MainPage";

function App({}) {
  return (
    <EuiProvider colorMode="light">
      <MainPage />
    </EuiProvider>
  );
}

export default App;
