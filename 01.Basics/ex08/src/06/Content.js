import React, {Fragment} from 'react';
import Clock01 from "./Clock01";
import Clock02 from "./Clock02";

export default function () {
    return (
        <Fragment>
            <p>JSX Tutorial - {"Quirks III: if-Statement's Problem with { _epression_ }"}</p>
            <Clock01/>
            <Clock02/>
        </Fragment>
    );
}