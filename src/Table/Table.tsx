import * as React from 'react';
//import Button from '../../Button/Button';
//import Icon from '../../Icon/Icon';
//import { ItemStyles, MenuStyles, SelectContainerStyles, SelectContent, SelectStyles } from './Select.styles';

interface Props {
  children?:any;
  width?:'stretched' | 'auto' | number;
  data:{ 'header': any, 'body': any };
}

interface DefaultProps {
  width:'stretched';
}

type defaultProps = Readonly<DefaultProps>;

export default class Table extends React.Component<Props, any> {
  private static defaultProps:defaultProps = {
    width: 'stretched',
  };
  constructor(props:Props) {
    super(props);
  }

  public render():any {
      console.log(this.props.data)
    return(
        <table>
            <thead>
                {this.props.data.header.map((item:any) => {
                    return <th>{item}</th>;
                })}
            </thead>
            <tbody>
                {this.props.data.body.map((item:any) => {
                    const keys:any = Object.keys(item);  
                    const values = keys.map((elem:any) => item[elem]);
                    console.log(values, keys, item)
                    return (
                        <tr>
                            {values.map((item:any) => {
                                return <td>{item}</td>
                            })}
                        </tr>);
                })}
            </tbody>
        </table>
    );
  }
}
