import React, { FC } from "react";
import { NavigationContainer as RNNavigationContainer } from "@react-navigation/native";
import StackNavigation from "./StackNavigation";
import { Box } from "../themes";

const NavigationContainer: FC = () => {
  return (
    <RNNavigationContainer>
      <StackNavigation />
    </RNNavigationContainer>
  );
};

export default NavigationContainer;
