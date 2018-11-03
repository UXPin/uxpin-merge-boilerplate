import * as React from 'react';

export interface Props {
  children:string;
}

export default function SelectItem(props:Props):React.ReactNode {
  return (
    <span>
      {props.children}
    </span>
  );
}
