import React, { Component } from 'react';
import './Projects.css';
import Brakeout from './assets/Brakeout.png';
import ImageGallery from './assets/ImageGallery.png';
import Pong from './assets/Pong.png';
import SpaceWar from './assets/SpaceWar.jpg';
import TicTac from './assets/TicTac.png';
import Knolyx from './assets/knolyx.png';
import Iamrobbie from './assets/iamrobbie.png';
import Brainconcert from './assets/brainconcert.png';
import EasyDo from './assets/EasyDo.png';
import Project from '../components/project/Project.component';

class Projects extends Component {
    handleRedirect(url) {
        window.open(url, '_blank')

    }
    render() {
        const Items = [
            { name: 'Space-War', image: SpaceWar, key: 'SpaceWar', urlGit: 'https://github.com/Alexandru-Purcea/space-war', urlDisplay: 'https://alex0909.itch.io/space-war', description: 'Space war is single player game written in vanilla JavaScript. Your mission is to destroy or dodge as many asteroids as possible.' },
            { name: 'Brain-Concert', image: Brainconcert, key: 'Brainconcert', urlDisplay: 'https://www.brainconcert.com/', description: "I have implemented the website for 'Brain Concert', an online store for IT courses." },
            { name: 'Knolyx', image: Knolyx, key: 'Knolyx', urlDisplay: 'https://www.knolyx.com/', description: 'I collaborated at the development of Knolyx, one of the top 20 E-Learning Platforms in the world according to elearningindustry.com.' },
            { name: 'EasyDo Events', image: EasyDo, key: 'EasyDo', urlDisplay: 'https://www.easydoevents.com/', description: 'I collaborated at the development of EasyDo Events, an event management platform that focuses on customizability.' },
            { name: 'Brakeout', image: Brakeout, key: 'Brakeout', urlGit: 'https://github.com/Alexandru-Purcea/break-out', urlDisplay: 'https://alex0909.itch.io/break-out', description: 'BrakeOut is a modern implementation of the 1976 original game which was released by Atari. It is built using plain JavaScript, HTML and CSS. ' },
            { name: 'Photo-finder', image: ImageGallery, key: 'ImageGallery', urlGit: 'https://github.com/Alexandru-Purcea/photo-finder', urlDisplay: 'https://codepen.io/Alex1909/pen/mzymbV?editors=0110', description: 'Photo-Finder is a web page written in React that uses Google Search API to help you find the photo that you were looking for.' },
            { name: 'TicTacToe', image: TicTac, key: 'TicTac', urlGit: 'https://github.com/Alexandru-Purcea/TicTac', urlDisplay: 'https://codepen.io/Alex1909/pen/gBbovO', description: 'Tic Tac Toe is a modern implementation of the original game using React.' },
            { name: 'Pong', image: Pong, key: 'Pong', urlGit: 'https://github.com/Alexandru-Purcea/Pong', urlDisplay: 'https://alex0909.itch.io/pong', description: 'Pong is a modern implementation of the original game which was released in 1972 by Atari. It is built using plain JavaScript, HTML and CSS. ' },
            { name: 'I am Robbie', image: Iamrobbie, key: 'Iamrobbie', urlDisplay: 'http://www.iamrobbie.ro/', description: "I have implemeted the website for 'I am Robbie', an educational program where children can assimilate the notions of mathematics, physics and communication with the help of practical activities." }
        ]
        const ListItems = Items.map((item) => {
            return (
                <Project key={item.key} color={item.color} image={item.image} description={item.description} name={item.name} handleRedirectGit={() => this.handleRedirect(item.urlGit)} handleRedirectDisplay={() => this.handleRedirect(item.urlDisplay)} git={item.urlGit} />
            )
        })
        return (
            <div id={'Projects-container'}>
                <div id={'Projects-background'} />
                <div id={'Projects-overlay'}>
                    <div id={'Projects-title'}>Some of my projects</div>
                    <div id={'Projects-elements'}>
                        {ListItems}
                    </div>
                </div>
            </div>
        )
    }
};

export { Projects };