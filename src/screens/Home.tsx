import React, { FC } from "react";
import { Button } from "../components/ui";
import { AppNavigationProps } from "../navigation";
import { Box, Text } from "../themes";

const Home: FC<AppNavigationProps<"Home">> = ({ navigation, route }) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="title" textAlign="center">
        Home
      </Text>
      <Button
        label="go to TodoList"
        onPress={() => navigation.push("TodoList")}
      />
    </Box>
  );
};

export default Home;
