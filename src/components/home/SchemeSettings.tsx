import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Button, Switch } from "../ui";
import { useSelector } from "../../store";
import { resetColorScheme, setColorScheme } from "../../store/global/actions";
import { Box, Text } from "../../themes";
import { useColorScheme } from "react-native";
import { useDarkMode } from "../../hooks";

const SchemeSettings: FC = () => {
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.global.colorScheme);
  const deviceColorScheme = useColorScheme();
  const darkMode = useDarkMode();

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
        <Button
          label={`use device color scheme (${deviceColorScheme})`}
          onPress={() => dispatch(resetColorScheme())}
        />
      </Box>
    </Box>
  );
};

export default SchemeSettings;
