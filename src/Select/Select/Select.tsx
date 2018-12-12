import * as React from 'react';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import { ItemStyles, MenuStyles, SelectContainerStyles, SelectContent, SelectStyles } from './Select.styles';

interface Props {
  children:React.ReactNode;
  width?:'stretched' | 'auto' | number;
  placeholder?:string;
}

interface State {
  content?:string | undefined;
  open?:boolean;
  selected?:number | string;
}

const initialState:State = {
  open: false,
};

export default class Select extends React.Component<Props, State> {
  public static defaultProps:Partial<Props> = {
    placeholder: 'Select...',
    width: 'stretched',
  };

  constructor(props:Props) {
    super(props);
    this.state = { ...initialState, content: this.props.placeholder };
  }

  public render():JSX.Element {
    return (
      <SelectContainerStyles {...this.props}>
        <SelectStyles onClick={this.toggleList} {...this.props}>
            <SelectContent>
              {this.state.content}
            </SelectContent>
            {this.state.content !== this.props.placeholder ?
              <Button
                mode="minimal"
                type="error"
                size="s"
                stretched={false}
                icon={<Icon icon="ActionCloseSvg" size="xs" color="#444"/>}
                onClick={(e) => this.restartSelect(e)} />
            : ''}
            <Icon icon="ChevronSvg" color="#444"/>
        </SelectStyles>
        {this.state.open ?
        <MenuStyles {...this.props}>
            {React.Children.map(this.props.children, (item:JSX.Element, i:number) => {
              const option:string = item.props.children;
              return <ItemStyles
                      id={`${i}listItem`}
                      active={this.state.selected}
                      onClick={() => this.selectItem(option, i)}
                      {...this.props}
                      >
                      {item}
                      </ItemStyles>;
            })}
        </MenuStyles> : ''}
      </SelectContainerStyles>
    );
  }

  private selectItem = (content:string, id:number) => {
    this.setState({
      content,
      open: false,
      selected:id,
    });
  }

  private toggleList = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  private restartSelect = (e:any) => {
    e.stopPropagation();
    this.setState({ content: this.props.placeholder, open: false, selected: '' });
  }
}
