import React from 'react';
import checkPassword from './check-password';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const currentPassword = this.state.password;
    const errorMessage = checkPassword(currentPassword).errorMessage;
    const validateSymbol = checkPassword(currentPassword).validateSymbol;
    return (
      <div className="container">
        <form action="">
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="password" value={this.state.password} onChange={this.handlePasswordChange }/>
            <p className="error-message">{errorMessage}</p>
            <i className={`fa-solid fa-${validateSymbol} validator-${validateSymbol}`}></i>
          </div>
        </form>
      </div>
    );
  }

}
