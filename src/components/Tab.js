import React, {Component} from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this);
  }

  render() {
    const name = this.props.name;
    const currentTab = this.props.currentTabId;
    let className = 'tab-item';

    if (currentTab === this.props.id) {
      className = 'tab-item-current';
    }
    return (
      <li className={className} onClick={this.onClick}>
        {name}
      </li>
    );
  }
}

export default Tab;