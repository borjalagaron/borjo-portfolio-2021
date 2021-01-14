import { lazy } from 'react';

const paths = [
  {
    cName: 'nav-link',
    component: lazy(() => import('./About')),
    title: 'About Me',
    url: '/about',
  },
  // {
  //   component: lazy(() => import('./Agile')),
  //   title: 'Agile',
  //   url: '/agile',
  //   cName: 'nav-link',
  // },
  // {
  //   component: lazy(() => import('./UX')),
  //   title: 'UX',
  //   url: '/ux',
  //   cName: 'nav-link',
  // },
  {
    component: lazy(() => import('./Frontend')),
    title: 'FrontEnd',
    url: '/frontend',
    cName: 'nav-link',
  },
  {
    component: lazy(() => import('./Frontend/components/Weather')),
    title: 'Weather App',
    url: '/frontend/weatherApp',
    cName: '',
  },
  {
    component: lazy(() => import('./Frontend/components/Photos')),
    title: 'Garten Projekt - Photo Exhibition',
    url: '/frontend/gartenProjekt',
    cName: '',
  },
  {
    component: lazy(() => import('./Frontend/components/IbanChecker')),
    title: 'Iban Checker',
    url: '/frontend/ibanChecker',
    cName: '',
  },
];

export default paths;
