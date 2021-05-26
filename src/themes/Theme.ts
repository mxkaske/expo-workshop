import {
  createTheme,
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { TouchableOpacityProps, TouchableOpacity } from "react-native";

const palette = {
  purple: "#9381FF",
  turquoise: "#55DBCB",
  red: "#FF331F",

  black: "#201E1F",
  white: "#F8F7FF",
};

const spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 40,
};

export const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    mainForeground: palette.black,
    primary: palette.purple,
    secondary: palette.red,
    baseText: palette.black,
    baseTitle: palette.purple,
  },
  spacing: spacing,
  borderRadii: spacing,
  textVariants: {
    title: {
      fontSize: 28,
      fontFamily: "OpenSans-Bold",
      color: "baseTitle",
    },
    subtitle: {
      fontSize: 26,
      fontFamily: "OpenSans-Bold",
      lineHeight: 30,
      color: "baseText",
    },
    body: {
      fontSize: 18,
      fontFamily: "OpenSans-Regular",
      color: "baseText",
    },
    button: {
      fontSize: 18,
      color: "secondary",
      fontFamily: "OpenSans-Italic",
      textAlign: "center",
    },
    description: {
      fontSize: 15,
      fontFamily: "OpenSans-Light",
      color: "baseText",
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export const darkTheme = {
  ...theme,
  colors: {
    mainBackground: palette.black,
    mainForeground: palette.white,
    primary: palette.purple,
    secondary: palette.turquoise,
    baseText: palette.white,
    baseTitle: palette.purple,
  },
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const BaseButton =
  createBox<Theme, TouchableOpacityProps>(TouchableOpacity);
export const useTheme = () => useReTheme<Theme>();

Text.defaultProps = {
  variant: "body",
};

export default theme;
