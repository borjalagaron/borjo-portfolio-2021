import React, { lazy } from 'react';
import { Route, Link } from 'react-router-dom';

import './Frontend.css';

const Frontend = ({ match }) => {
  const subRoutes = [
    { name: 'photos', component: lazy(() => import('./components/Photos')) },
    { name: 'weather', component: lazy(() => import('./components/Weather')) },
    { name: 'ibanChecker', component: lazy(() => import('./components/IbanChecker')) }, ]

  console.log(match)
  return (
    <div className="Frontend">
      { subRoutes.map(({name, component}) => (
          <>
            { match.isExact && <Link to={`${match.url}/${name}`}>
              {name}
            </Link> }
            <Route path={`${match.path}/${name}`} component={component} />
          </>
        )
      )}
    </div>
  );
};

export default Frontend;
