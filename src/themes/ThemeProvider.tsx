import React, { FC, ReactNode } from "react";
import { ThemeProvider as ReStyleThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { theme, darkTheme } from "./Theme";

interface Props {
  children: ReactNode;
  darkMode?: boolean;
}

const ThemeProvider: FC<Props> = ({ children, darkMode }) => {
  return (
    <ReStyleThemeProvider theme={darkMode ? darkTheme : theme}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      {children}
    </ReStyleThemeProvider>
  );
};

export default ThemeProvider;
