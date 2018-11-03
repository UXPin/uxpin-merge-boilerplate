import * as React from 'react';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { ItemStyles, MenuStyles, SelectContainerStyles, SelectContent, SelectStyles } from './Select.styles';

interface Props {
  children?:any;
  width?:'stretched' | 'auto' | number;
  placeholder?:string;
}

interface DefaultProps {
  width:'stretched';
  placeholder?:'Select...';
}

type defaultProps = Readonly<DefaultProps>;

export default class Select extends React.Component<Props, any> {
  private static defaultProps:defaultProps = {
    width: 'stretched',
    placeholder:'Select...'
  };
  constructor(props:Props) {
    super(props);
    this.state = {
      content:this.props.placeholder,
      open:false,
    };
  }

  public selectItem = (content:string, id:number) => {
    this.setState({
      content,
      open: false,
      selected:id,
    });
  }

  public toggleList = ():void => {
    this.setState(this.setState((prevState:any) => ({
      open: !prevState.open,
    })));
  }

  public restartSelect = (e:any):void => {
    e.stopPropagation();
    this.setState({ content:this.props.placeholder, open: false, selected: '' });
  }

  public render():any {
    const menuContent:React.ReactNode[] = this.props.children.length > 0 ? this.props.children : '';
    return (
      <SelectContainerStyles {...this.props}>
        <SelectStyles onClick={this.toggleList} {...this.props}>
            <SelectContent>
              {this.state.content}
            </SelectContent>
            {this.state.content !== 'Select...' ?
              <Button
                mode="minimal"
                type="error"
                size="s"
                stretched={false}
                icon={<Icon icon="ActionCloseSvg" size="xs" color="#444"/>}
                onClick={(e:any) => this.restartSelect(e)} />
            : ''}
            <Icon icon="ChevronSvg" color="#444"/>
        </SelectStyles>
        {this.state.open ?
        <MenuStyles {...this.props}>
            {menuContent.map((item:any, i:number) => {
              return <ItemStyles
                      id={`${i}listItem`}
                      active={this.state.selected}
                      onClick={() => this.selectItem(item.props.children, i)}
                      {...this.props}
                      >
                      {item}
                      </ItemStyles>;
            })}
        </MenuStyles> : ''}
      </SelectContainerStyles>
    );
  }
}
