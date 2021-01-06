import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './TextBox.css';

const TextBox = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    //ARK Estructura esta ok? TypeScript?
    //null or '' ?
    <div className="text-box-container" onClick={props.onClick}>
      {props.title ? <div className="text-box-title">{props.title}</div> : null}
      <div className="text-box">
        {props.backgroundImage ? (
          <div
            className="img"
            style={{
              backgroundImage: `url(${props.backgroundImage})`,
            }}
          >
            {' '}
          </div>
        ) : null}
        {props.quote ? <div className="quote-text">{props.quote}</div> : null}
        {props.quoteAuthor ? (
          <div className="quote-author">{props.quoteAuthor}</div>
        ) : (
          ''
        )}
        {props.list ? (
          <div className="quote-text ">
            <ul className="text-list">
              {props.list.map((listItem, index) => {
                return (
                  <li>
                    <span className="underlined underlined--offset">
                      {listItem.name}
                    </span>
                  </li>
                );
              })}
            </ul>
            {/* <ul className="text-list">
              {props.list.map((listItem, index) => {
                return (
                  <li className="underlined underlined--offset">
                    {listItem.name}
                  </li>
                );
              })}
            </ul> */}
          </div>
        ) : null}
      </div>
    </div>
  );
};

TextBox.propTypes = {
  // Optional
  title: PropTypes.string,
  backgroundImage: PropTypes.string,
  quote: PropTypes.string,
  quoteAuthor: PropTypes.string,
};

export default TextBox;
