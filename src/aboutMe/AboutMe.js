import React, { Component } from 'react';
import './AboutMe.css';


class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'My name is Purcea Alexandru and here is my story:',
            subtitle: 'My name is Purcea Alexandru and I\'m a Front End Developer',
            mobile: false
        }
    }
    componentDidMount() {
        if (window.innerWidth < 751) {
            this.setState({ title: 'Who is this guy?', mobile: true })
        }
    }
    render() {
        let title = this.state.title;
        let subtitle = this.state.subtitle;
        return (
            <div id={'AboutMe-container'}>
                <div id={'AboutMe-photo'}>
                    <div className={'section-title'}>Who is this guy ?</div>
                </div>
                <div id={'AboutMe-content'}>
                    <div id={'AboutMe-textbox'}>
                        <p>{title}</p>
                        {this.state.mobile === true && <p>{subtitle}</p>}
                        <p>When I was 15 I had a tough decision to make, follow the norm or be different. I eventually choose the latter one, that meant leaving one of the top High Schools in Bucharest and joining a private one, and like that, my journey as a programmer begun.</p>
                        <p>Since that moment, mentored by my brother which is currently head of development at a major US healthcare application, I started learning JavaScript, HTML, CSS, React and the majority of technologies used in Front End Development, skills that I firstly implemented in personal projects, some of which can be seen below.</p>
                        <p>Not too long afterwards I started developing EasyDo Events a professional enterprise application for managing events and Knolyx one of the top 20 E-Learning Platforms in the world according to elearningindustry.com. I have also implemented websites for various companies like 'IamRobbie' and 'BrainConcert'.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export { AboutMe };
