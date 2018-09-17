import React, {Component} from 'react';
import Tab from './Tab';

class Navbar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>{this.props.title}</h1>
        <ol className="tab-list">
          {this.props.children.map((child, index) => {
            const name = child.props.children;
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

export default Navbar;