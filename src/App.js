import React, { Component } from 'react';
import './App.css';
import { Header } from './header/Header';
import { AboutMe } from './aboutMe/AboutMe';
import { Projects } from './projects/Projects';
import { Contact } from './contact/Contact';

class App extends Component {
  handleScroll() {
    let height = document.body.offsetHeight;
    let scrollY = window.pageYOffset;
    if (scrollY > 300) {
      document.getElementById('navigation-bar').style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
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
      </div>
    );
  }
}

export default App;
