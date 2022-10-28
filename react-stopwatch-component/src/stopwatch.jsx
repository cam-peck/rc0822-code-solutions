import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isCounting: false
    };

    this.handleIconClick = this.handleIconClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  tick() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  startWatch() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  stopWatch() {
    clearInterval(this.interval);
  }

  handleIconClick() {
    if (!this.state.isCounting) {
      this.startWatch();
    } else {
      this.stopWatch();
    }
    this.setState({
      isCounting: !this.state.isCounting
    });
  }

  handleResetClick() {
    if (!this.state.isCounting) {
      this.stopWatch();
      this.setState({
        counter: 0,
        isCounting: false
      });
    }
  }

  render() {
    const currentCount = this.state.counter;
    let icon;
    if (!this.state.isCounting) {
      icon = 'play';
    } else {
      icon = 'pause';
    }
    return (
      <div className="container">
        <div className="stopwatch-wrapper" onClick={this.handleResetClick}>
          <p className="stopwatch-number">{currentCount}</p>
        </div>
        <div className="icon-wrapper">
          <i className={`fa-solid fa-${icon} fa-xl`} onClick={this.handleIconClick}></i>
        </div>
      </div>
    );
  }
}
