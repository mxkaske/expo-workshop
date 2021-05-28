import React, { FC, ReactNode } from "react";
import { ThemeProvider as ReStyleThemeProvider } from "@shopify/restyle";
import { StatusBar } from "expo-status-bar";
import { theme, darkTheme } from "./Theme";
import { useSelector } from "../store";
import { useColorScheme } from "react-native";

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const colorScheme = useSelector((state) => state.global.colorScheme);
  const deviceColorScheme = useColorScheme();
  const darkMode = colorScheme
    ? colorScheme === "dark"
    : deviceColorScheme === "dark";
  return (
    <ReStyleThemeProvider theme={darkMode ? darkTheme : theme}>
      <StatusBar style={darkMode ? "light" : "dark"} />
      {children}
    </ReStyleThemeProvider>
  );
};

export default ThemeProvider;
