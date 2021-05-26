import { ColorProps } from "@shopify/restyle";
import React, { ComponentProps, FC } from "react";
import { BaseButton, Text, Theme } from "../../themes";

type Props = ComponentProps<typeof BaseButton> &
  ColorProps<Theme> & { label: string };

const Button: FC<Props> = ({
  children,
  label,
  color = "primary",
  ...props
}) => {
  return (
    // FIXME: TS error
    // @ts-expect-error
    <BaseButton
      borderRadius="xs"
      paddingVertical="s"
      paddingHorizontal="l"
      backgroundColor="mainBackground"
      borderWidth={1}
      borderColor={color}
      {...props}
    >
      <Text color={color} variant="button">
        {label}
      </Text>
    </BaseButton>
  );
};

export default Button;
