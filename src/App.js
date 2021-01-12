import React from 'react';
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
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <Route exact path="/" component={Home} />
          {paths.map(({ url, component }) => (
            <Route path={url} component={component} />
          ))}
        </Switch>
    </div>
  );
};

export default App;
