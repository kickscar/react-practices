import React, {Component} from 'react';
import './assets/scss/Clock.scss';

class Clock extends Component {
    render() {
        return (
            <div className='clock-display'>
                <h2>{this.props.title}</h2>
                <div className={"clock-field"}>
                    <div>
                        <p className={"hours"}>{('0' + (this.props.hours > 12 ? this.props.hours - 12 : this.props.hours)).slice(-2)}</p>
                        <p className={"placeholder"}></p>
                    </div>
                    <div className={"colon"}>
                        <p>:</p>
                    </div>
                    <div className={"numbers"}>
                        <p>{('0' + this.props.minutes).slice(-2)}</p>
                        <p className={"placeholder"}></p>
                    </div>
                    <div className={"colon"}>
                        <p>:</p>
                    </div>
                    <div className={"numbers"}>
                        <p>{('0' + this.props.seconds).slice(-2)}</p>
                        <p className={"placeholder"}></p>
                    </div>
                    <div className={"AmPm"}>
                        <div>
                            <p className={this.props.hours < 12 ? 'on' : 'off'}>am</p>
                        </div>
                        <div>
                            <p className={this.props.hours >= 12 ? 'on' : 'off'}>pm</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log('Clock.componentDidMount');
    }

    componentWillUnmount() {
        console.log('Clock.componentWillUnmount');
    }
}

export default Clock;