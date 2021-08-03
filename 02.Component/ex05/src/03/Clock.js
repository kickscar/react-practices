import React, { Component } from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {
    render() {
        return (
            <div className="clock-field">
                <div className="numbers">
                    <p className="hours">{ this.props.hours }</p>
                    <p className="placeholder"></p>
                    <p className="type">hour</p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p className="minutes">{ this.props.minutes }</p>
                    <p className="placeholder"></p>
                    <p className="type">minute</p>
                </div>
                <div className="colon">
                    <p>:</p>
                </div>
                <div className="numbers">
                    <p className="seconds">{ this.props.seconds }</p>
                    <p className="placeholder"></p>
                    <p className="type">second</p>
                </div>
                <div className="am-pm">
                    <div>
                        <p className={ `am ${ this.props.pm ? '' : 'light-on'}`   }>am</p>
                    </div>
                    <div>
                        <p className={ `pm ${ this.props.pm ? 'light-on' : ''}` }>pm</p>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('Clock', 'componentWillUnmount');
    }
}