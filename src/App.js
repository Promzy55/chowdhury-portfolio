import React from 'react';
import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="app">
      <div className="resume-container">
        <Header />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
      </div>
    </div>
  );
}

export default App;
