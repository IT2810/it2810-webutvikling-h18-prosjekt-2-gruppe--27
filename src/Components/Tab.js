import React, {Component} from 'react';

class Tab extends Component {
  handleClick = () => {
    const {name, onClick} = this.props;
    onClick(name);
  };

  render() {
    const {handleClick} = this;
    const {currentTab, name} = this.props;

    let className = 'tab-item';

    if (currentTab === name) {
      className += ' tab-item-current';
    }

    return (
      <li className={className} onClick={handleClick}>
        {name}
      </li>
    );
  }
}

export default Tab;