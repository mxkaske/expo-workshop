import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Todo, TodoList } from "../screens";
import { AppRoutes } from "./types";
import { useTheme } from "../themes";

const Stack = createStackNavigator<AppRoutes>();

const StackNavigation: FC = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.mainBackground },
        headerStyle: { backgroundColor: theme.colors.mainBackground },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TodoList" component={TodoList} />
      <Stack.Screen name="Todo" component={Todo} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
