import React, { Component } from 'react';
import './App.css';
import { Header } from './header/Header';
import { AboutMe } from './aboutMe/AboutMe';
import { Projects } from './projects/Projects';
import { Contact } from './contact/Contact';
import { Footer } from './footer/Footer';

let scrollY;
class App extends Component {
  handleScroll() {
    if (scrollY > window.pageYOffset) {
      document.getElementById('navigation-bar').style.marginTop = '-0';
    } else {
      document.getElementById('navigation-bar').style.marginTop = '-60px';
    }
    scrollY = window.pageYOffset;
    if (scrollY > 200) {
      document.getElementById('navigation-bar').style.backgroundColor = 'rgba(255, 255, 255, 0.75)';
    } else {
      document.getElementById('navigation-bar').style.backgroundColor = 'transparent';
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    return (
      <div id={'App-container'}>
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
