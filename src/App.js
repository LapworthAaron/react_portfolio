import React from 'react';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          <Route path="/" element={<Home />} />
          <Route path="progGallery" element={<ProjectGallery />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;