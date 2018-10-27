import styled from "react-emotion";
import {css} from "emotion";
import withProps from "recompose/withProps";
import * as colors from "../styles/colors.json";
import * as borders from "../styles/borders.json";
import * as shadow from "../styles/shadows.json";
import * as typography from "../styles/typography.json";
import * as size from "../styles/sizes.json";

/* Selects the right background color based on passed props */
const backgroundSelector = (type, mode) => {
  if (!mode) {
    switch (type) {
      case "primary":
        return colors.blue.base;
      case "secondary": 
        return colors.silver.base;
      case "success":
        return colors.success;
      case "error":
        return colors.error;
      case "warning":
        return colors.warning;
      default:
        return colors.blue.base;
        break;
    }
  } else if (mode === "active") {
    switch (type) {
      case "primary":
        return colors.active.primary;
      case "secondary":
        return colors.active.secondary
      case "success":
        return colors.active.success;
      case "error":
        return colors.active.error;
      case "warning":
        return colors.active.warning;
      default:
        return colors.active.default;
        break;
    }
  } else if (mode === "hover") {
    switch (type) {
      case "primary":
        return colors.hover.primary;
      case "secondary": 
        return colors.hover.secondary;
      case "success":
        return colors.hover.success;
      case "error":
        return colors.hover.error;
      case "warning":
        return colors.hover.warning;
      default:
        return colors.hover.default;
        break;
    }
  }
};

/* Selects the right shadow for button type */
const shadowSelector = type => {
  switch (type) {
    case "primary":
      return shadow.primary;
    case "secondary":
      return shadow.box;
    case "success":
      return shadow.success;
    case "error":
      return shadow.error;
    case "warning":
      return shadow.warning;
    default:
      return shadow.default;
      break;
  }
}

const borderFocusSelector = type => {
  switch (type) {
    case "default":
      return colors.blue.dark15;
    case "success":
      return colors.green.dark15;
    case "error":
      return colors.red.dark15;
    case "warning":
      return colors.orange.dark15;
    default:
      return colors.blue.dark15;
      break;
  }
}

/* Selects the right font size based on passed props */
const sizeSelector = size => {
  switch (size) {
    case "xs":
      return typography.size.xs;
    case "s":
      return typography.size.s;
    case "m":
      return typography.size.m;
    case "l":
      return typography.size.l;
    default:
      return typography.size.m;
      break;
  }
};

const ButtonCommon = withProps({
  createProps: props => this.props.isDisabled
})(styled("button")`
  width: ${props => (props.stretched ? "100%" : "auto")};
  padding: 0 ${size.s} 0 ${size.s};       
  border-radius: ${borders.borderRadius};
  border: ${props => `1px solid ${backgroundSelector(props.type)}`};
  font-family: ${typography.fontFamily};
  font-weight: ${typography.weight.bold};
  line-height: ${props =>
    `${sizeSelector(props.size) * typography.lineHeightMultiplier.button}px`};
  };
  font-size: ${props => sizeSelector(props.size)};
  &:hover {
    background-color: ${props => backgroundSelector(props.type, "hover")};
    border: ${props => `1px solid ${backgroundSelector(props.type, "hover")}`};
    box-shadow: ${props => shadowSelector(props.type)};
  }
  &:focus {
    outline: none;
    background-color: ${props => backgroundSelector(props.type, "active")};
    border: ${props => `1px solid ${borderFocusSelector(props.type)}`};
  }
  &:active {
    background-color: ${props => backgroundSelector(props.type, "active")};
    border: ${props => `1px solid ${backgroundSelector(props.type, "active")}`};
    box-shadow: 'none';
  }
  &:disabled {
    background-color: ${colors.disabled.background};
    border: ${borders.borderStandard} ${colors.disabled.border};
    color: ${colors.disabled.color};
    &:hover {
      box-shadow: none;
    }
  }
`);



const filledStyles = css({
  backgroundColor: "black",
  color: "white",
});

const modes = (mode, type) => {
  if(mode === "ghost") {
    return css`
      background-color: none;
      color: ${ type !== "secondary" ? backgroundSelector(type) : colors.gray.base};
      &:hover, &:active, &:focus {
        color: ${type !== "secondary" ? "white" : colors.gray.base};
      }
  ` 
  }
  else {
    return css`
      background-color: ${backgroundSelector(type)};
      color: ${type !== "secondary" ? "white" : colors.gray.base};
    `
  }
}

const ButtonStyles = styled(ButtonCommon)`
  ${props => modes(props.mode, props.type)};
`;


export default ButtonStyles;
