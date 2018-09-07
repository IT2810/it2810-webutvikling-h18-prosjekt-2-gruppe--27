import React, {Component} from 'react';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: this.props.children[0].props.name,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({currentTab: tab});
  };

  render() {
    const {onClickTabItem} = this;
    const {children} = this.props;
    const {currentTab} = this.state;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child, index) => {
            console.log(child.props.name);
            const {name} = child.props; /*Why does not .name work?*/
            return (
              <Tab
                currentTab={currentTab}
                key={index}
                name={name}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            return child.props.name !== currentTab ? undefined : child;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;