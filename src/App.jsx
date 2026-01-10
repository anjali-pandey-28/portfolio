import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Home />
      <About />
      <Skills />
      <Projects />
      <Socials />

      <footer style={{ padding: '50px', color: '#d4a5a5', fontSize: '0.8rem' }}>
        Handcrafted with &#10084; by Anjali.
      </footer>
    </div>
  );
}

export default App;