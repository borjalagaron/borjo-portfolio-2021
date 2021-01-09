import React, { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Home from './Home'
import paths from './paths';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <Route exact path="/" component={Home} />
          {paths.map(({ url, component }) => (
            <Route path={url} component={component} />
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
