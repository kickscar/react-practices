import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor(props) {
        super(props);
    }

    onClickHandler() {
        console.log('TitelBar01: clicked!');
    }

    render() {
        return (
            <div>
                <h4 onClick={this.onClickHandler}>
                    Function Handler in Class Component(click here!)
                </h4>
            </div>
        );
    }
}