import * as React from 'react';
import ButtonStyles from './Button.styles';

export interface Props {
  onClick?:() => void;
  isDisabled?:boolean;
  type?:'primary' | 'secondary' | 'success' | 'error' | 'warning';
  mode?:'filled' | 'ghost';
  title?:string;
  background?:string;
  size?:'xs' | 's' | 'm' | 'l';
  stretched:boolean;
  children:string;
}

export default function Button({
  onClick,
  isDisabled = false,
  type = 'primary',
  mode = 'filled',
  title,
  background,
  size = 'm',
  stretched = true,
  children,
}:Props) {
  return (
    <ButtonStyles
      onClick={onClick}
      disabled={isDisabled}
      title={title}
      background={background}
      size={size}
      stretched={stretched}
      type={type}
      mode={mode}
    >
      {children}
    </ButtonStyles>
  );
}
