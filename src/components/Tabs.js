import React, {Component} from 'react';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: this.props.children[0].props.name,
    };
    this.onClickTabItem = this.onClickTabItem.bind(this);
  }

  onClickTabItem = (tab) => {
    this.setState({currentTab: tab});
  };

  render() {
    const currentTab = this.state.currentTab;
    return (
      <div className="tabs">
        <ol className="tab-list">
          {this.props.children.map((child, index) => {
            const name = child.props.name;
            return (
              <Tab
                currentTab={currentTab}
                key={index}
                name={name}
                onClick={this.onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {this.props.children.map((child) => {
            return child.props.name !== currentTab ? undefined : child;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;