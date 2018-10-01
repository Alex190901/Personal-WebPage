import React, { Component } from 'react';
import LinkedIn from './assets/linkedin.icon.svg';
import './Header.css';

class Header extends Component {
    scrollTo(element) {
        const top = document.getElementById(element).offsetTop;
        console.log(top)
        window.scrollTo({ top: top - 60, behavior: 'smooth' })
    }

    render() {
        return (
            <div id='header-container'>
                <div id='header-background' />;
                <div id='header-overlay'>
                    <div id={'navigation-bar'}>
                        <div id={'social-links'}>
                            <a className={'button'} id="LinkedIn-button" target={'#blank'} href="https://www.linkedin.com/in/alexandru-gabriel-purcea-6a0768158/">
                                <img src={LinkedIn} className={'icon'} id="LinkedIn-icon" alt="LinkedIn-icon" />
                            </a>
                        </div>
                        <div id={'navigation-buttons-container'}>
                            <button className={'navigation-button'} onClick={() => this.scrollTo('AboutMe-container')}>ABOUT ME</button>
                            <button className={'navigation-button'} onClick={() => this.scrollTo('Projects-container')}>PROJECTS</button>
                            <button className={'navigation-button'} onClick={() => this.scrollTo('Contact-container')}>CONTACT</button>
                        </div>
                    </div>
                    <div id={'header-title'}>Hi, I'm Alex.</div>
                </div>
            </div>
        )
    }
};

export { Header };