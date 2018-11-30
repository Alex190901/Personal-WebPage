import React, { Component } from 'react';
import './scrollToTop.css';
import ScrollToTopBtn from './assets/backToTop.png';

class ScrollToTop extends Component {
    constructor(props) {
        super(props);
        this.scrollTo = this.scrollTo.bind(this);
    }

    scrollTo() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    render() {
        return (
            <img src={ScrollToTopBtn} onClick={() => this.scrollTo(0)} alt='Back To Top' id='ScrollToTop' />
        )
    }
}

export default ScrollToTop;
