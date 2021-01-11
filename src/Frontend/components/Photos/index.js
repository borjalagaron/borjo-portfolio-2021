import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Route } from 'react-router-dom';
import Breadcrumbs from 'shared/Breadcrumbs';
import paths from 'paths';

import DSC01510 from 'assets/images/garden/DSC01510.webp';
import DSC02099 from 'assets/images/garden/DSC02099.webp';
import DSC02201 from 'assets/images/garden/DSC02201.webp';
import DSC02341 from 'assets/images/garden/DSC02341.webp';
import DSC04026 from 'assets/images/garden/DSC04026.webp';
import DSC04038 from 'assets/images/garden/DSC04038.webp';
import DSC04102 from 'assets/images/garden/DSC04102.webp';
import DSC04266 from 'assets/images/garden/DSC04266.webp';
import ORG_DSC03181 from 'assets/images/garden/ORG_DSC03181.webp';

import './styles.css';

import TextBox from 'shared/TextBox';

const defaultPhotos = [
  {
    url: 'DSC01510.webp',
    photo: DSC01510,
  },
  {
    url: 'DSC02099.webp',
    photo: DSC02099,
  },
  {
    url: 'DSC02201.webp',
    photo: DSC02201,
  },
  {
    url: 'DSC02341.webp',
    photo: DSC02341,
  },
  {
    url: 'DSC04026.webp',
    photo: DSC04026,
  },
  {
    url: 'DSC04038.webp',
    photo: DSC04038,
  },
  {
    url: 'DSC04102.webp',
    photo: DSC04102,
  },
  {
    url: 'DSC04266.webp',
    photo: DSC04266,
  },
  {
    url: 'ORG_DSC03181.webp',
    photo: ORG_DSC03181,
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
                backgroundImage={photo.photo}
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
                  src={photo.photo}
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
