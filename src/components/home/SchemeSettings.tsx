import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Switch } from "../ui";
import { useSelector } from "../../store";
import { setColorScheme } from "../../store/global/actions";
import { Box, Text } from "../../themes";
import { useColorScheme } from "react-native";

const SchemeSettings: FC = () => {
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.global.colorScheme);
  const deviceColorScheme = useColorScheme();
  // console.log({ colorScheme, deviceColorScheme });
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Box flexDirection="row" alignItems="center">
        <Text variant="description" padding="l">
          Color mode: {colorScheme || "default colorScheme"}
        </Text>
        <Switch
          value={colorScheme === "dark"}
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
          value={deviceColorScheme === colorScheme}
          onValueChange={(value: boolean) => {
            dispatch(setColorScheme(value ? "dark" : "light"));
          }}
        />
      </Box>
    </Box>
  );
};

export default SchemeSettings;
