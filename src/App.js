import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Frontend from 'components/Frontend/Frontend';
import UX from 'components/UX/UX';
import Agile from 'components/Agile/Agile';
import Home from 'components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/agile" component={Agile} />
          <Route path="/ux" component={UX} />
          <Route path="/frontend" component={Frontend} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
