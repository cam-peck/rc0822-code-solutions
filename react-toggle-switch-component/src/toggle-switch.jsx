import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const isClicked = this.state.isClicked;
    let switchText;
    let switchBgColor;
    let switchState;
    if (isClicked) {
      switchText = 'ON';
      switchBgColor = 'green';
      switchState = 'active';
    } else {
      switchText = 'OFF';
      switchBgColor = 'lightgray';
      switchState = 'inactive';
    }
    return (
      <div className="container">
        <div className={`switch switch-bg-${switchBgColor}`} onClick={this.handleClick}>
          <div className={`switch-toggle-btn switch-${switchState}`}></div>
        </div>
        <p>{`${switchText}`}</p>
      </div>
    );
  }
}
