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

const Button:React.SFC<Props> = (props:Props):JSX.Element => {
  return (
    <ButtonStyles {...props}>
      {props.icon}
      {props.children}
    </ButtonStyles>
  );
};

Button.defaultProps = {
  iconDirection: 'left',
  isDisabled: false,
  mode: 'filled',
  size: 'm',
  stretched: true,
  type: 'primary',
};

export { Button as default };
