import React, { Component } from 'react';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div id={'AboutMe-container'}>
                <div id={'AboutMe-photo'}>
                    <div className={'section-title'}>WHO IS THIS GUY?</div>
                </div>
                <div id={'AboutMe-content'}>
                    <div id={'AboutMe-textbox'}>
                        <p>My name is Purcea Alexandru and here is my story:</p>
                        <p>I begun writing JavaScript at the age of 15 mentored by my brother which is currently the head of development at a major US healthcare application and although I was the winner of multiple science contests I left one of the top High Schools and joined a private one for being able to work full time as a programmer.</p>
                        <p>Today I work as a Front end Developer specialized in React and Redux.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export { AboutMe };