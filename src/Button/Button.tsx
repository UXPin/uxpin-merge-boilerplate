import * as React from "react";
import ButtonStyles from "./Button.styles";

export interface Props {
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  type?: "primary" | "secondary" | "success" | "error" | "warning";
  mode?: "filled" | "ghost" | "minimal";
  title?: string;
  background?: string;
  size?: "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
  stretched: boolean;
  children?: string;
  icon?: React.ReactNode;
  iconDirection?: "left" | "right";
}

const Button: React.SFC<Props> = (props:Props):JSX.Element => {
  return (
    <ButtonStyles {...props}>
      {props.icon}
      {props.children}
    </ButtonStyles>
  );
};

Button.defaultProps = {
  isDisabled: false,
  type: "primary",
  mode: "filled",
  size: "m",
  stretched: true,
  iconDirection: "left"
};

export { Button as default };
