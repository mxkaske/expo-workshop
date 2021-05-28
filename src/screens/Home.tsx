import React, { FC } from "react";
import { useColorScheme } from "react-native";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { Button, Switch } from "../components/ui";
import { AppNavigationProps } from "../navigation";
import { useSelector } from "../store";
import { resetColorScheme, setColorScheme } from "../store/global/actions";
import { Box, Text } from "../themes";

const Home: FC<AppNavigationProps<"Home">> = ({ navigation, route }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const colorScheme = useSelector((state) => state.global.colorScheme);
  const deviceColorScheme = useColorScheme();
  const darkMode = colorScheme
    ? colorScheme === "dark"
    : deviceColorScheme === "dark";

  return (
    <Box flex={1} padding="l" alignItems="center" justifyContent="center">
      <Box flex={1} alignItems="center" justifyContent="center">
        <Button label="reset" onPress={() => queryClient.resetQueries()} />
        <Button
          label="go to TodoList"
          marginTop="m"
          onPress={() => navigation.push("TodoList")}
        />
      </Box>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text>Current Mode {colorScheme || "default colorScheme"}</Text>
        <Box flexDirection="row" alignItems="center">
          <Text padding="l">Dark Mode: {darkMode ? "on" : "off"}</Text>
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
    </Box>
  );
};

export default Home;
