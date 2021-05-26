import React from "react";
import { NavigationContainer } from "./src/navigation";
import { ThemeProvider } from "./src/themes";

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer />
    </ThemeProvider>
  );
}
