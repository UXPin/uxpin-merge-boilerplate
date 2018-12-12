import * as React from 'react';
import ButtonStyles from './Button.styles';

export interface Props {
  onClick?:(e:React.MouseEvent<HTMLInputElement>) => void;
  isDisabled?:boolean;
  type?:'primary' | 'secondary' | 'success' | 'error' | 'warning';
  mode?:'filled' | 'ghost' | 'minimal' | 'flat';
  title?:string;
  background?:string;
  size?:'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
  stretched:boolean;
  children?:string;
  icon?:React.ReactNode;
  iconDirection?:'left' | 'right';
}

export default function Button({
  iconDirection = 'left',
  isDisabled = false,
  mode = 'filled',
  size = 'm',
  stretched = true,
  type = 'primary',
  icon,
  children,
}:Props):JSX.Element {
  const props:Props = { iconDirection, isDisabled, mode, size, stretched, type };
  return (
    <ButtonStyles {...props}>
      {icon}
      {children}
    </ButtonStyles>
  );
}
