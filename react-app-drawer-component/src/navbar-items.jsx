import React from 'react';

export default class NavbarItems extends React.Component {
  render() {
    return (
      <div className="nav-wrapper">
        <h2>Choose a game</h2>
        <ul>
          <li>Zelda</li>
          <li>Pokemon</li>
          <li>Spyro</li>
          <li>Chrono Trigger</li>
        </ul>
      </div>
    );
  }
}
