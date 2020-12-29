import React, { Component } from 'react';
import borjoLogo from '../../images/borjo-logo.svg';
import './UX.css';

class UX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: undefined,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => this.setState({ done: true }));
    }, 500);
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <div className="UX">
            <img
              src={borjoLogo}
              width="40"
              height="40"
              className="loading-logo"
              alt="Logo"
            />
          </div>
        ) : (
          <h1 className="UX">hello world</h1>
        )}
      </div>
    );
  }
}
export default UX;
