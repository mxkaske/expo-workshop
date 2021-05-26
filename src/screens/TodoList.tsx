import React, { FC } from "react";
import { List } from "../components/todos";
import { AppNavigationProps } from "../navigation";
import { Box } from "../themes";

const TodoList: FC<AppNavigationProps<"TodoList">> = ({
  navigation,
  route,
}) => {
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <List />
    </Box>
  );
};

export default TodoList;
