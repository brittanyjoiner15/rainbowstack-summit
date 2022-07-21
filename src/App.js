import { EuiButton, EuiProvider } from "@elastic/eui";
import "@elastic/eui/dist/eui_theme_dark.css";
import React from "react";
import "./App.css";

function App() {
  return (
    <EuiProvider colorMode="dark">
      <div className="App">
        <EuiButton color="primary">Hi</EuiButton>
      </div>
    </EuiProvider>
  );
}

export default App;
