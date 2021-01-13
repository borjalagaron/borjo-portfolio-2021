import React, { lazy } from 'react';
import ProjectCard from './components/ProjectCard';

import weatherAppThumbnail from 'assets/images/thumbnails/WeatherApp_small.webp';
import gartenProjektThumbnail from 'assets/images/thumbnails/GartenProjekt_small.webp';
import formularThumbnail from 'assets/images/thumbnails/Formular_small.webp';

import { useTranslation } from 'react-i18next';

import './Frontend.css';

const Frontend = ({ match }) => {
  const { t } = useTranslation();
  const subRoutes = [
    {
      name: 'gartenProjekt',
      component: lazy(() => import('./components/Photos')),
      title: t('projects.gardenPhotoGallery-title'),
      desc: t('projects.gardenPhotoGallery-desc'),
      thumbnail: gartenProjektThumbnail,
    },
    {
      name: 'weatherApp',
      component: lazy(() => import('./components/Weather')),
      title: t('projects.weatherApp-title'),
      desc: t('projects.weatherApp-desc'),
      thumbnail: weatherAppThumbnail,
    },
    {
      name: 'ibanChecker',
      component: lazy(() => import('./components/IbanChecker')),
      title: t('projects.ibanChecker-title'),
      desc: t('projects.ibanChecker-desc'),
      thumbnail: formularThumbnail,
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
