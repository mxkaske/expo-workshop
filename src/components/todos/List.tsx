import React, { FC } from "react";
import { Button } from "../ui";
import { Box } from "../../themes";
import { useNavigation } from "@react-navigation/core";
import { AppStackNavigationProps } from "../../navigation/types";

const data = ["Todo 1", "Todo 2", "Todo 3"];

const List: FC = () => {
  const navigation = useNavigation<AppStackNavigationProps>();
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      {data.map((item, idx) => (
        <Button
          key={item}
          label={item}
          onPress={() => navigation.push("Todo", { id: item })}
          marginBottom={idx !== data.length - 1 ? "m" : undefined}
        />
      ))}
    </Box>
  );
};

export default List;
