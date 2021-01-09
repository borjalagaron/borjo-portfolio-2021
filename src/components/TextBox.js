import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import './TextBox.css';

const TextBox = ({title,
  backgroundImage,
  quote,
  quoteAuthor, list, onClick}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-box-container" onClick={onClick}>
      {!!title && <div className="text-box-title">{title}</div>}
      <div className="text-box">
        {backgroundImage ? (
          <div
            className="img"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            {' '}
          </div>
        ) : null}
        {quote ? <div className="quote-text">{quote}</div> : null}
        {quoteAuthor ? (
          <div className="quote-author">{quoteAuthor}</div>
        ) : (
          ''
        )}
        {list && (
          <div className="quote-text ">
            <ul className="text-list">
              {list.map(({name}, index) => {
                return (
                  <li key={index}>
                    <span className="underlined underlined--offset">
                      {name}
                    </span>
                  </li>
                );
              })}
            </ul>
            {/* <ul className="text-list">
              {list.map(({name}, index) => {
                return (
                  <li className="underlined underlined--offset">
                    {name}
                  </li>
                );
              })}
            </ul> */}
          </div>
        )}
      </div>
    </div>
  );
};



export default TextBox;
