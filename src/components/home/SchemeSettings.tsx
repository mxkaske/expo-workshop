import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "../ui";
import { useSelector } from "../../store";
import { resetColorScheme, setColorScheme } from "../../store/global/actions";
import { Box, Text } from "../../themes";
import { useColorScheme } from "react-native";

const SchemeSettings: FC = () => {
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.global.colorScheme);
  const deviceColorScheme = useColorScheme();
  const darkMode = colorScheme
    ? colorScheme === "dark"
    : deviceColorScheme === "dark";

  console.log({ colorScheme, deviceColorScheme });

  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text>Current Mode {colorScheme || "default colorScheme"}</Text>
      <Box flexDirection="row" alignItems="center">
        <Text variant="description" padding="l">
          Dark Mode: {darkMode ? "on" : "off"}
        </Text>
        <Switch
          value={darkMode}
          onValueChange={(value: boolean) => {
            dispatch(setColorScheme(value ? "dark" : "light"));
          }}
        />
      </Box>
      <Box flexDirection="row" alignItems="center">
        <Text variant="description" padding="l">
          {`Use device settings (${deviceColorScheme})`}
        </Text>
        <Switch
          value={!colorScheme}
          onValueChange={(value: boolean) => {
            if (value) dispatch(resetColorScheme());
          }}
        />
      </Box>
    </Box>
  );
};

export default SchemeSettings;
