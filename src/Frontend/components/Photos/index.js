import React, { useState } from 'react';
import ReactModal from 'react-modal';

import TextBox from 'components/TextBox';

const defaultPhotos = [
  {
    url: 'DSC01510.webp',
  },
  {
    url: 'DSC02099.webp',
  },
  {
    url: 'DSC02201.webp',
  },
  {
    url: 'DSC02341.webp',
  },
  {
    url: 'DSC04026.webp',
  },
  {
    url: 'DSC04038.webp',
  },
  {
    url: 'DSC04102.webp',
  },
  {
    url: 'DSC04266.webp',
  },
  {
    url: 'ORG_DSC03181.webp',
  },
];

const modalStyles = {
  ...ReactModal.defaultStyles,
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    maxWidth: '90%',
    height: 'fit-content',
    maxHeight: '90%',
  },
};

const Photos = ({ photos }) => {
  const [showModal, setShowModal] = useState(-1);

  return photos.map((photo, index) => (
    <>
      <TextBox
        key={index}
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
        style={modalStyles}
      >
        <img
          style={{ maxWidth: '100%', maxHeight: '85vh', display: 'block' }}
          src={'/garden/' + photo.url}
          alt="xxx"
        />
      </ReactModal>
    </>
  ));
};

Photos.defaultProps = {
  photos: defaultPhotos,
};

export default Photos;
