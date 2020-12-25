import React, { Component } from 'react';
import { MenuItems } from './MenuItems';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="NavbarItems">
        <h2 className="navbar-logo">Hola</h2>
        <div className="menu-icon"></div>
        <ul>
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
