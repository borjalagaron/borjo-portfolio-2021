import React, { useState } from 'react';
import { Photos } from './Photos';
import TextBox from 'components/TextBox';
import Weather from './Weather.js';
import ReactModal from 'react-modal';

import './Frontend.css';
import { findByLabelText } from '@testing-library/react';

const Frontend = () => {
  const [showModal, setShowModal] = useState(-1);
  return (
    <div className="Frontend">
      {/* ARK separar Weather & photos */}
      <Weather />
      {Photos.map((photo, index) => {
        return (
          <>
            <TextBox key={index}
              onClick={() => {
                setShowModal(index);
              }}
              backgroundImage={'/garden/' + photo.url}
            ></TextBox>
            {/* ARK hacer imagen aparezca completa y centrada */}
            <ReactModal
              id={index}
              isOpen={showModal === index}
              onRequestClose={() => {
                setShowModal(-1);
              }}
              contentLabel="Minimal Modal Example"
              ariaHideApp={false}
            >
              <div>
                <img
                  style={{ maxWidth: '100%',
                    maxHeight: '100%',
                    display: 'block' }}
                  src={'/garden/' + photo.url}
                  alt="xxx"
                />
              </div>
            </ReactModal>
          </>
        );
      })}
    </div>
  );
};

export default Frontend;
