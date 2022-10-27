import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <ThanksButton />;
    } else {
      button = <ClickMeButton onClick={this.handleClick} />;
    }

    return (
      button
    );
  }
}

function ClickMeButton(props) {
  return <button onClick={props.onClick}>
    Click me!
  </button>;
}

function ThanksButton(props) {
  return <button>
    Thanks!
  </button>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<CustomButton />);
