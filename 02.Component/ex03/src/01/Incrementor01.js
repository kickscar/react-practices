import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }

    render() {
        return (
            <div>
                <button onClick={(e) => {
                    this.setState({
                        val: this.state.val + this.state.step
                    })
                }}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}