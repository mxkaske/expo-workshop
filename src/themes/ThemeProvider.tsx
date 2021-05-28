import React, { FC, ReactNode } from "react";
import { ThemeProvider as ReStyleThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { theme, darkTheme } from "./Theme";
import { useDarkMode } from "../hooks";

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const darkMode = useDarkMode();
  return (
    <ReStyleThemeProvider theme={darkMode ? darkTheme : theme}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      {children}
    </ReStyleThemeProvider>
  );
};

export default ThemeProvider;
