import React, {Component} from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';

export default class App extends Component {
    render() {
        console.log(logo);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Hello React</p>
                </header>
            </div>
        );
    }
}