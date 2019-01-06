import React, { Component } from 'react';

import './App.css';
import Resume from './components/Resume.js';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
