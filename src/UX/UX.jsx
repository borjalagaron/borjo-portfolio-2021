import React, { Component } from 'react';
import borjoLogo from '../images/borjo-logo.svg';
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
          <div className="UX">
            <div className="text-box">
              <div class="blog-header">
                <div class="blog-cover">
                  <div class="blog-author">
                    <h3>Russ Beye</h3>
                  </div>
                </div>
              </div>
              <div class="blog-body">
                <div class="blog-title">
                  <h1>
                    <a href="/">I Like To Make Cool Things</a>
                  </h1>
                </div>
                <div class="blog-summary">
                  <p>
                    I love working on fresh designs that{' '}
                    <a href="https://www.youtube.com/watch?v=hANtM1vJvOo">
                      breathe
                    </a>
                    . To that end, I need to freshen up my portfolio here
                    because it does exactly the opposite. For the next month I
                    will be working almost exclusively on my portfolio. Sounds
                    like a lot of fun!
                  </p>
                </div>
                <div class="blog-tags">
                  <ul>
                    <li>
                      <a href="/">css</a>
                    </li>
                    <li>
                      <a href="/">web design</a>
                    </li>
                    <li>
                      <a href="/">codepen</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/russbeye">twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div><div className="text-box">
              <div class="blog-header">
                <div class="blog-cover">
                  <div class="blog-author">
                    <h3>Russ Beye</h3>
                  </div>
                </div>
              </div>
              <div class="blog-body">
                <div class="blog-title">
                  <h1>
                    <a href="#">I Like To Make Cool Things</a>
                  </h1>
                </div>
                <div class="blog-summary">
                  <p>
                    I love working on fresh designs that{' '}
                    <a href="https://www.youtube.com/watch?v=hANtM1vJvOo">
                      breathe
                    </a>
                    . To that end, I need to freshen up my portfolio here
                    because it does exactly the opposite. For the next month I
                    will be working almost exclusively on my portfolio. Sounds
                    like a lot of fun!
                  </p>
                </div>
                <div class="blog-tags">
                  <ul>
                    <li>
                      <a href="#">css</a>
                    </li>
                    <li>
                      <a href="#">web design</a>
                    </li>
                    <li>
                      <a href="#">codepen</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/russbeye">twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default UX;
