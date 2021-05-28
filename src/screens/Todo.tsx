import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { useTodo } from "../hooks";
import { AppNavigationProps } from "../navigation";
import { Box, Text } from "../themes";

const Todo: FC<AppNavigationProps<"Todo">> = ({ navigation, route }) => {
  const { data, isFetching } = useTodo(route.params.id);
  return (
    <Box flex={1} padding="l" alignItems="center" justifyContent="center">
      {isFetching && !data ? (
        <ActivityIndicator />
      ) : (
        <Box>
          <Text variant="title">{data?.title}</Text>
          <Text variant="description">UserId: {data?.userId}</Text>
          <Text variant="description">TodoId: {data?.id}</Text>
          <Text textAlign="right">
            {data?.completed ? "completed" : "uncompleted"}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Todo;
