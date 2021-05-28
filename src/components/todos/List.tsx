import React, { FC } from "react";
import { Button } from "../ui";
import { Box } from "../../themes";
import { useNavigation } from "@react-navigation/core";
import { AppStackNavigationProps } from "../../navigation/types";
import { ActivityIndicator, ScrollView } from "react-native";
import { useTodos } from "../../hooks";

const List: FC = () => {
  const navigation = useNavigation<AppStackNavigationProps>();
  const { data, isFetching } = useTodos();
  return (
    <ScrollView>
      <Box
        padding="l"
        flex={1}
        minHeight="100%"
        justifyContent="center"
        alignItems="center"
      >
        {isFetching && !data ? (
          <ActivityIndicator />
        ) : (
          data?.map((todo, idx) => (
            <Button
              key={todo.id}
              label={`Todo Nr. ${todo.id}`}
              onPress={() => navigation.push("Todo", { id: todo.id })}
              marginBottom={idx !== data.length - 1 ? "m" : undefined}
            />
          ))
        )}
      </Box>
    </ScrollView>
  );
};

export default List;
