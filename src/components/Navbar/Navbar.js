import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { ReactComponent as Logo } from '../../images/borjo-logo.svg';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Logo className="navbar-logo logo" />
        <h1 className="navbar-logo">
          
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
