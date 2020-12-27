import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero number={1054} />
    </div>
  );
}

export default App;
