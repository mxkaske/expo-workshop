import React, { FC } from "react";
import { SchemeSettings } from "../components/home";
import { Button } from "../components/ui";
import { AppNavigationProps } from "../navigation";
import { Box, Text } from "../themes";

const Home: FC<AppNavigationProps<"Home">> = ({ navigation, route }) => {
  return (
    <Box flex={1}>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text variant="title">Home</Text>
        <Button
          label="go to TodoList"
          marginTop="m"
          onPress={() => navigation.push("TodoList")}
        />
      </Box>
      <SchemeSettings />
    </Box>
  );
};

export default Home;
