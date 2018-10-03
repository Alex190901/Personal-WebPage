import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div id={'Contact-container'}>
                <div id={'Contact-content'}>
                    <p id='Contact-title' className='Contact-text'>I can help.</p>
                    <p id='Contact-subtitle' className='Contact-text'>I'm currently available for freelance work and full time employment.</p>
                    <p id='Contact-description' className='Contact-text'>If you have a project that you want to get started or think you need my help, then get in touch.</p>
                </div>
            </div>
        )
    }
};

export { Contact };