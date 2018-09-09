import React, {Component} from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.props.onClick.bind(this);
  }

  handleClick = () => {
    const name = this.props.name;
    const onClick = this.props.onClick;
    onClick(name);
  };

  render() {
    const name = this.props.name;
    const currentTab = this.props.currentTab;

    let className = 'tab-item';

    if (currentTab === name) {
      className = 'tab-item-current';
    }

    return (
      <li className={className} onClick={this.handleClick}>
        {name}
      </li>
    );
  }
}

export default Tab;