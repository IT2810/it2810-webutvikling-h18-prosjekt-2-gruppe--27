import React, {Component} from 'react';

class Tab extends Component {
  handleClick = () => {
    const {name, onClick} = this.props;
    onClick(name);
  };

  render() {
    const {
      handleClick,
      props: {
        currentTab,
        name,
      },
    } = this;

    let className = 'tab-list-item';

    if (currentTab === name) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={handleClick}
      >
        {name}
      </li>
    );
  }
}

export default Tab;