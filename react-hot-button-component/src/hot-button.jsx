import React from 'react';
import changeColor from './change-color';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickCount: 0
    };
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    const currentClicks = this.state.clickCount;
    const btnColor = changeColor(currentClicks);

    return (
      <div className="container">
        <button className={`btn btn-${btnColor}`} onClick={this.handleClick}>Hawt Button</button>
      </div>
    );
  }
}
