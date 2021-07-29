import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    onClickHeader() {
        console.log('TitleBar01 Clicked');
    }

    render() {
        return (
            <h1
                onClick = { this.onClickHeader }
                style={{
                    cursor: 'pointer'
                }}>
                TitleBar01
            </h1>
        )
    }
}