import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Route } from 'react-router-dom';
import Breadcrumbs from '../../Breadcrumbs';
import paths from '../../../paths';

import './styles.css';

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

  return (
    <>
      <div className="main-container">
        {paths.map(({ Component, title, url, cName }, key) => (
          <>
            <Route
              exact
              path={url}
              key={key}
              render={(props) => {
                const crumbs = paths
                  // Get all routes that contain the current one.
                  .filter(({ url }) => props.match.path.includes(url));

                console.log(`Generated crumbs for ${props.match.path}`);
                console.log(crumbs);
                crumbs.map(({ title, url }) => console.log({ title, url }));
                return <Breadcrumbs crumbs={crumbs} />;
              }}
            />
          </>
        ))}
        <div className="photo-gallery">
          {photos.map((photo, index) => (
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
                  style={{
                    maxWidth: '100%',
                    maxHeight: '85vh',
                    display: 'block',
                  }}
                  src={'/garden/' + photo.url}
                  alt="xxx"
                />
              </ReactModal>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

Photos.defaultProps = {
  photos: defaultPhotos,
};

export default Photos;
