import React, { useState } from 'react';

import { Photos } from './Photos';
import TextBox from 'components/TextBox';
import './Frontend.css';

const Frontend = () => {
  return (
    <div className="Frontend">
      {Photos.map((photo, index) => {
        return (
          <TextBox
            backgroundImage={'/garden/' + photo.url}
          />
        );
      })}
    </div>
  );
};

export default Frontend;
