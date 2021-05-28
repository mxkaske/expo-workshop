import React, { FC } from "react";
import { useQueryClient } from "react-query";
import { SchemeSettings } from "../components/home";
import { Button } from "../components/ui";
import { AppNavigationProps } from "../navigation";
import { Box, Text } from "../themes";

const Home: FC<AppNavigationProps<"Home">> = ({ navigation, route }) => {
  const queryClient = useQueryClient();
  return (
    <Box flex={1} padding="l" alignItems="center" justifyContent="center">
      <Button label="reset" onPress={() => queryClient.resetQueries()} />
      <Text variant="title">Home</Text>
      <Button
        label="go to TodoList"
        marginTop="m"
        onPress={() => navigation.push("TodoList")}
      />
      <SchemeSettings />
    </Box>
  );
};

export default Home;
