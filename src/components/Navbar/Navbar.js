import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import borjoLogo from '../../images/borjo-logo.svg';
import LanguageSelector from '../LanguageSelector.js';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/" className="navbar-logo logo">
          <img src={borjoLogo} width="40" height="40" className="logo-image" alt="Logo" />
        </Link>
        <div className="nav-content">
          <LanguageSelector />
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink className={item.cName} to={item.url} onClick={this.handleClick}>
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
            
          </ul>

          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={
                this.state.clicked ? 'fas fa-times fa-fw' : 'fas fa-bars fa-fw'
              }
            ></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
