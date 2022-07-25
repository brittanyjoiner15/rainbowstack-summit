import { EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React from "react";
import "./App.css";
import MainPage from "./components/MainPage";

function App() {
  console.log(process.env.REACT_APP_PASSWORD);
  return (
    <EuiProvider colorMode="dark">
      <MainPage />
    </EuiProvider>
  );
}

export default App;
