import React from 'react';
import NavbarItems from './navbar-items';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  handleMenuClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeDrawer(event) {
    if (this.state.isOpen === true && !event.target.classList.contains('drawer')) {
      this.setState({
        isOpen: false
      });
    }
  }

  render() {
    const drawerIsOpen = this.state.isOpen;
    let drawerState;
    let bgColor;
    if (drawerIsOpen) {
      drawerState = 'open';
      bgColor = 'dark';
    } else {
      drawerState = 'closed';
      bgColor = 'light';
    }
    return (
      <div className={`container bg-${bgColor}`} onClick={this.closeDrawer}>
        <div className="drawer-wrapper">
          <i className="fa-solid fa-bars fa-xl" onClick={this.handleMenuClick}></i>
        </div>
        <div className={`drawer drawer-${drawerState}`}>
          <NavbarItems onClick={this.closeDrawer}/>
        </div>
      </div>
    );
  }
}
