import React, { Component, Fragment } from 'react';
import LifeCycle from './LifeCycle';


export default class App extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            color: '#000'
        }
    }
    render() {
        return (
            <Fragment>
                <h2>ex05 - Component LifeCycle</h2>
                <button onClick={ () => this.setState({ color: `#${Math.floor((Math.random() * 0xffff)).toString(16)}` }) }>색상변경</button>
                <br/><br/>
                <LifeCycle color={ this.state.color }/>
            </Fragment>
        );
    }
}