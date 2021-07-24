import React, { Component, Fragment } from 'react';
import Header from "./Header";
import Clock01 from "./Clock01";
import Clock02 from "./Clock02";

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Clock01 />
                <Clock02 />
            </Fragment>
        );
    }
}