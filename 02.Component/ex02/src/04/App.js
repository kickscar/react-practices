import React, { Component, Fragment } from 'react';
import './assets/css/App.css';

import Banner01 from "./Banner01";
import Banner02 from "./Banner02";

export default function App() {
    return (
        <Fragment>
            <Banner01 />
            <Banner02 />
        </Fragment>
    );
}