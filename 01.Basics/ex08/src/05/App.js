import React, { Component, Fragment } from 'react';
import Header from "./Header";
import Clock from "./Clock";

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Clock />
            </Fragment>
        );
    }
}