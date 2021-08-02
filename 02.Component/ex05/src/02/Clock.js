import React, {Component} from 'react';
import SessionAM from './SessionAM';
import SessionPM from './SessionPM';
import './assets/css/Clock.css';

export default class Clock extends Component {
    render() {
        return (
            <div className="Clock">
                {this.props.hours}
                {" : "}
                {this.props.minutes}
                {" : "}
                {this.props.seconds}
                {" "}
                {this.props.pm ? <SessionPM/> : <SessionAM/>}
            </div>
        );
    }

    componentWillUnmount() {
        console.log('Clock', 'componentWillUnmount');
    }
}