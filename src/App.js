import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';
import LanguageSelector from 'components/LanguageSelector';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero number={1054} />
      <LanguageSelector />
    </div>
  );
}

export default App;
