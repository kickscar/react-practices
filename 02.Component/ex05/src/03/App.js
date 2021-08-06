import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            count: 0,
            hours: '00',
            minutes: '00',
            seconds: '00',
            session: "am"
        }
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                { this.state.count % 10 === 0 ?
                    null :
                    <Clock
                        hours={ this.state.hours }
                        minutes={ this.state.minutes }
                        seconds={ this.state.seconds }
                        session={ this.state.session } />
                }
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(function() {
            const date = new Date();
            const hours = date.getHours();
            const minutes = ('0' + date.getMinutes()).slice(-2);
            const seconds = ('0' + date.getSeconds()).slice(-2);

            this.setState({
                hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
                minutes: minutes,
                seconds: seconds,
                pm: hours > 12,
                count: this.state.count + 1
            })
        }.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}