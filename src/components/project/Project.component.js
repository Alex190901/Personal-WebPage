import React, { Component } from 'react';
import './Project.component.css';

class Project extends Component {
    render() {
        let props = this.props;
        let style = {
            backgroundColor: props.color,
        };
        return (
            <div className="Project-Container" style={style}>
                <img src={props.image} className="Project-Image" alt='project' />
                <div className="Project-Description">
                    <p className='Project-Name'>{props.name}</p>
                    {props.description}
                </div>
                <div className='Project-Buttons'>
                    <button className='Project-Link' onClick={props.handleRedirectDisplay}>Display</button>
                    {this.props.git && <button className='Project-Link' id='Project-Source' onClick={props.handleRedirectGit}>See Source</button>}
                </div>
            </div>
        )
    }
}

export default Project;