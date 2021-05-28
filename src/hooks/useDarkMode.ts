import { useColorScheme } from "react-native";
import { useSelector } from "../store";

export const useDarkMode = () => {
  const colorScheme = useSelector((state) => state.global.colorScheme);
  const deviceColorScheme = useColorScheme();
  const darkMode = colorScheme
    ? colorScheme === "dark"
    : deviceColorScheme === "dark";

  return darkMode;
};
