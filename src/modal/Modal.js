import React, { Component } from 'react';
import './Modal.css';
import Exit from './assets/exit.svg';

class Modal extends Component {
    render() {
        const props = this.props;
        return (
            <div id="Modal-container">
                <div id="Modal-main">
                    <img src={Exit} className={'icon'} id="Exit-icon" alt="X" onClick={props.handleClose} />
                    <div id='Modal-content'>
                        <p>What do you want to do ?</p>
                        <div id="Modal-options">
                            <button onClick={props.handleRedirectDisplay}>Display</button>
                            <button onClick={props.handleRedirectGit}>See Source</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { Modal }