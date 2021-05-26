import React, { FC } from "react";
import { AppNavigationProps } from "../navigation";
import { Box, Text } from "../themes";

const Todo: FC<AppNavigationProps<"Todo">> = ({ navigation, route }) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text variant="title" textAlign="center">
        {route.params.id}
      </Text>
    </Box>
  );
};

export default Todo;
