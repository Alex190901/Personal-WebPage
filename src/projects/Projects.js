import React, { Component } from 'react';
import './Projects.css';
import Brakeout from './assets/Brakeout.jpg';
import ImageGallery from './assets/ImageGallery.png';
import Pong from './assets/Pong.png';
import SpaceWar from './assets/SpaceWar.jpg';
import TicTac from './assets/TicTac.png';
import { Modal } from '../modal/Modal';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.state = {
            modal: false,
            urlGit: '',
            urlDisplay: ''
        }
    }
    handleOpen(item) {
        this.setState({ modal: true, urlGit: item.urlGit, urlDisplay: item.urlDisplay }, () => (console.log(this.state)));
    }
    handleClose() {
        this.setState({ modal: false, urlGit: '', urlDisplay: '' });
    }
    handleRedirect(url) {
        window.open(url, '_blank')
        this.handleClose();
    }
    render() {
        const state = this.state;
        const Items = [
            { photo: Brakeout, key: 'Brakeout', urlGit: 'https://github.com/Alex190901/break-out-game', urlDisplay: 'https://codepen.io/Alex1909/pen/MVjjdw' },
            { photo: ImageGallery, key: 'ImageGallery', urlGit: 'https://github.com/Alex190901/photo-finder', urlDisplay: 'https://codepen.io/Alex1909/pen/mzymbV?editors=0110' },
            { photo: Pong, key: 'Pong', urlGit: 'https://github.com/Alex190901/Pong', urlDisplay: 'https://codepen.io/Alex1909/pen/KeKwwg' },
            { photo: SpaceWar, key: 'SpaceWar', urlGit: 'https://github.com/Alex190901/space-war', urlDisplay: 'https://codepen.io/Alex1909/pen/pLQwJp' },
            { photo: TicTac, key: 'TicTac', urlGit: 'https://github.com/Alex190901/TicTac', urlDisplay: 'https://codepen.io/Alex1909/pen/gBbovO' }
        ]

        const ListItems = Items.map((item) => {
            return (
                <div className='Project-Photo-Container' onClick={() => this.handleOpen(item)} key={item.key}>
                    <img src={item.photo} className="Project-Photo" alt='project' />
                </div>
            )
        })

        console.log(state)
        return (
            <div id={'Projects-container'}>
                {state.modal === true && <Modal handleClose={this.handleClose} handleRedirectGit={() => this.handleRedirect(this.state.urlGit)}
                    handleRedirectDisplay={() => this.handleRedirect(this.state.urlDisplay)} />}
                <div id={'Projects-background'} />;
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