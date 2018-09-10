import React, {Component} from 'react';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="tabs">
        <ol className="tab-list">
          {this.props.children.map((child, index) => {
            const name = child.props.name;
            return (
              <Tab
                currentTabId={this.props.currentTabId}
                id={index}
                key={index}
                name={name}
                onClick={() => this.props.onActiveTabChange(index)}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default Tabs;