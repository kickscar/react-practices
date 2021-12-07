import React, {Component} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = this.getCurrentClockTime();
    }

    getCurrentClockTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = ('0' + date.getMinutes()).slice(-2);
        const seconds = ('0' + date.getSeconds()).slice(-2);

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: minutes,
            seconds: seconds,
            session: hours >= 12 ? "pm" : "am",
            ticks: this.state ? this.state.ticks + 1 : 0
        };
    }

    render() {
        return (
            <div className='clock-display'>
                <h2>ex05 - Component LifeCycle Practice</h2>
                {
                    this.state.ticks
                }
                <br />
                {
                    this.state.ticks % 10 === 0 ?
                        null :
                        <Clock
                            hours={this.state.hours}
                            minutes={this.state.minutes}
                            seconds={this.state.seconds}
                            session={this.state.session} />
                }
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(function () {
            this.setState(this.getCurrentClockTime());
        }.bind(this), 1000);
    }
}