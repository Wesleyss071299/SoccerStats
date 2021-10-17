import React from "react";
import "./App.css";
import AppProvider from "./hooks/AppProvider";
import Home from "./pages/Home";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Home />
      </div>
    </AppProvider>
  );
}

export default App;
