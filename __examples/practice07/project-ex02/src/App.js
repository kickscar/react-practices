import React, {Component} from 'react';
import logo from './assets/images/logo.svg';
import './App.scss';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Hello React</p>
                    <div className="Webpack-logo">Webpack</div>
                </header>
            </div>
        );
    }
}