import React, { Component } from 'react';
import './Footer.css';
import LinkedIn from './assets/linkedin.icon.svg';
import Github from './assets/github.icon.svg';



class Footer extends Component {
    scrollTo(element) {
        const top = document.getElementById(element).offsetTop;
        console.log(top)
        window.scrollTo({ top: top, behavior: 'smooth' })
    }

    render() {
        return (
            <div id='Footer-container'>
                <div id='Footer-icons'>
                    <a className={'button'} id="Footer-button" target={'#blank'} href="https://www.linkedin.com/in/alexandru-gabriel-purcea-6a0768158/">
                        <img src={LinkedIn} className={'icon'} id="LinkedIn-icon" alt="LinkedIn-icon" />
                    </a>
                    <a className={'button'} id="Footer-button" target={'#blank'} href="https://github.com/Alexandru-Purcea">
                        <img src={Github} className={'icon'} id="Github-icon" alt="Github-icon" />
                    </a>
                </div>
                <p>© 2018 <span ><a id='Copyright' target={'#blank'} href="https://alexandru-purcea.github.io/">Purcea Alexandru</a></span>. All rights reserved.</p>
            </div>
        )
    }
};

export { Footer };