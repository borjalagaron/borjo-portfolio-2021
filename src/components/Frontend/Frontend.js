// this component for contact page
import React, { Component } from 'react';
import './Frontend.css';

class Frontend extends Component {
  render() {
    return (
      <div>
        <nav class="menu">
          <div class="menu__item">
            <a class="menu__item">Showreel</a>
            <div class="marquee">
              <div class="marquee__inner" aria-hidden="true">
                <span>Showreel</span>
                <span>Showreel</span>
                <span>Showreel</span>
                <span>Showreel</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Frontend;
