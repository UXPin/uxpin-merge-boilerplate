import * as React from 'react';
import ButtonStyles from './Button.styles';

export interface Props {
  onClick?:() => void;
  isDisabled?:boolean;
  type?:'primary' | 'secondary' | 'success' | 'error' | 'warning';
  mode?:'filled' | 'ghost' | 'minimal';
  title?:string;
  background?:string;
  size?:'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  stretched:boolean;
  children:string;
  icon:React.ReactNode;
  iconDirection:'left' | 'right';
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
  icon,
  iconDirection = 'left',
}:Props):any {
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
      icon={icon}
      iconDirection={iconDirection}
    > {icon}
      {children}
    </ButtonStyles>
  );
}
