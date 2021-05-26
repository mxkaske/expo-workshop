import React, { FC } from "react";
import { Switch as RNSwitch, SwitchProps } from "react-native";
import { useTheme } from "../../themes";

const Switch: FC<SwitchProps> = ({ ...props }) => {
  // TODO: add correct colors to switch
  const theme = useTheme();

  return <RNSwitch {...props} />;
};

export default Switch;
