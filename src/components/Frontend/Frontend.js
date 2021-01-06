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
            <TextBox
              onClick={() => {
                setShowModal(index);
              }}
              backgroundImage={'/garden/' + photo.url}
            ></TextBox>

            <ReactModal
              id={index}
              isOpen={showModal === index}
              onRequestClose={() => {
                setShowModal(-1);
              }}
              contentLabel="Minimal Modal Example"
              ariaHideApp={false}
            >
              <div style={{ display: 'flex', alignItems: 'center',height:'auto'}}>
                <img
                  style={{ height: '100%'}}
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
