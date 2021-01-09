import React, { lazy } from 'react';

const paths = [
  {
    cName: 'nav-link',
    component: lazy(() => import('./About')),
    title: 'About Me',
    url: '/about',
  },
  // {
  //   component: lazy(() => import('./components/Agile')),
  //   title: 'Agile',
  //   url: '/agile',
  //   cName: 'nav-link',
  // },
  // {
  //   component: lazy(() => import('./components/UX')),
  //   title: 'UX',
  //   url: '/ux',
  //   cName: 'nav-link',
  // },
  {
    component: lazy(() => import('./Frontend')),
    title: 'FrontEnd',
    url: '/frontend',
    cName: 'nav-link',
  },{
    component: lazy(() => import('./Frontend/components/Weather')),
    title: 'Weather',
    url: '/frontend/weather',
    cName: '',
  },{
    component: lazy(() => import('./Frontend/components/Photos')),
    title: 'Photos',
    url: '/frontend/photos',
    cName: '',
  }
];

export default paths