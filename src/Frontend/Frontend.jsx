import React, { lazy } from 'react';

import ProjectCard from './components/ProjectCard';

// import weatherAppThumbnail from '%PUBLIC_URL%/images/thumbnails/WeatherApp';

import { useTranslation } from 'react-i18next';

import './Frontend.css';

const Frontend = ({ match }) => {
  const { t } = useTranslation();
  const subRoutes = [
    {
      name: 'photos',
      component: lazy(() => import('./components/Photos')),
      title: t('projects.gardenPhotoGallery-title'),
      desc: t('projects.gardenPhotoGallery-desc'),
      thumbnail: 'images/thumbnails/WeatherApp.webp',
    },
    {
      name: 'weather',
      component: lazy(() => import('./components/Weather')),
      title: t('projects.weatherApp-title'),
      desc: t('projects.weatherApp-desc'),
      thumbnail: '/images/thumbnails/WeatherApp.webp',
    },
    {
      name: 'ibanChecker',
      component: lazy(() => import('./components/IbanChecker')),
      title: t('projects.ibanChecker-title'),
      desc: t('projects.ibanChecker-desc'),
      thumbnail: 'images/thumbnails/WeatherApp.webp',
    },
  ];

  return (
    <div className="Frontend">

      {subRoutes.map((subRoute) => (
        <>
          <ProjectCard match={match} subRoute={subRoute} />
        </>
      ))}
    </div>
  );
};

export default Frontend;
