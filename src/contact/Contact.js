import React, { Component } from 'react';
import './Contact.css';
import LinkedIn from './assets/linkedin.icon.svg';
import Github from './assets/github.icon.svg';

class Contact extends Component {
    render() {
        return (
            <div id={'Contact-container'}>
                <div id={'Contact-photo'}>
                    <div className={'section-title'}>CONTACT ME</div>
                </div>
                <div id={'Contact-content'}>
                    <div id={'Contact-textbox'}>
                        <p>If you want to collaborate on crafting amazing experience for people – you are very welcome to contact me.</p>
                        <p>I am available for freelance projects and full-time employment.</p>
                        <p>Purcea Alexandru-Gabriel</p>
                        <p> Front end Developer <br />
                            alexandru.purcea@yahoo.com <br />
                            +40 0773809279
                        </p>
                    </div>
                    <div id={'Contact-footer'}>
                        <a className={'button'} id="LinkedIn-button" target={'#blank'} href="https://www.linkedin.com/in/alexandru-gabriel-purcea-6a0768158/">
                            <img src={LinkedIn} className={'icon'} id="Contact-icon" alt="LinkedIn-icon" />
                        </a>
                        <a className={'button'} id="LinkedIn-button" target={'#blank'} href="https://github.com/Alexandru-Purcea">
                            <img src={Github} className={'icon'} id="Contact-icon" alt="Github-icon" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
};

export { Contact };