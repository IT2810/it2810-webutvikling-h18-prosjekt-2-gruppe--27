import React, { Component } from 'react';

import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: this.props.children[0].props.name,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ currentTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        currentTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child, index) => {
            const { name } = child.props;

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
            if (child.props.name !== currentTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;