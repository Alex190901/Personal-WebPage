import React, { Component } from 'react';
import './AboutMe.css';


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'My name is Purcea Alexandru and here is my story:',
            introduction: 'I'
        }
    }
    componentDidMount() {
        if (window.innerWidth < 751) {
            this.setState({ title: 'Who is this guy?', introduction: 'My name is Purcea Alexandru and I' })
        }
    }
    render() {
        let title = this.state.title;
        let introduction = this.state.introduction;
        return (
            <div id={'AboutMe-container'}>
                <div id={'AboutMe-photo'}>
                    <div className={'section-title'}>Who is this guy ?</div>
                </div>
                <div id={'AboutMe-content'}>
                    <div id={'AboutMe-textbox'}>
                        <p>{title}</p>
                        <p>{introduction} begun writing JavaScript at the age of 15 mentored by my brother which is currently the head of development at a major US healthcare application. Although I was the winner of multiple science contests I left one of the top High Schools and joined a private one for being able to work full time as a programmer.</p>
                        <p>Today I work as a Front end Developer specialized in React and Redux.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export { AboutMe };