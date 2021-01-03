import React, { Component } from 'react';
import './TextBox.css';

const TextBox = (props) => {
  return (
    <div className="text-box-container">
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
        ) : null}
        {props.list ? (
          <div className="quote-text ">
            <ul className="text-list">
              {props.list.map((listItem, index) => {
                return (
                  <li >
                    <span className="underlined underlined--offset">{listItem.name}</span>
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

// {Photos.map((photo, index) => {
//   return (
//     <TextBox
//       backgroundImage={'/garden/' + photo.url}
//     />
//   );
// })}

export default TextBox;
