import React, {Component} from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    render() {
        return (
            <div className="clock-field">
                <div>
                    <p className="hours">{this.props.hours}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{this.props.minutes}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p>{this.props.seconds}</p>
                    <p className="placeholder"></p>
                </div>
                <div className="AmPm">
                    <div>
                        <p className={this.props.session === 'am' ? 'on' : 'off'}>am</p>
                    </div>
                    <div>
                        <p className={this.props.session === 'pm' ? 'on' : 'off'}>pm</p>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('Clock', 'componentWillUnmount');
    }
}