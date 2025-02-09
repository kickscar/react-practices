import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);

        //this.value = this.props.begin;
        //this.step = this.props.step;
        
        this.state = {
            val: this.props.begin,
            val2: 20,
            val3: 30
        }
    }

    render() {
        console.log(`render() called, ${this.value}`);
        
        return (
            <div>
                <button onClick={() => {
                    //
                    // Anti-Pattern
                    //
                    // this.value += this.step;
                    // console.log(this.value);
                    // this.render();
                    // this.forceUpdate();
                    //

                    this.setState({
                        val: this.state.val + this.props.step
                    });
                }}>
                    {'+'}
                </button>
                {' '}
                {
                    //this.value
                    this.state.val
                }
                {' '}
                <button onClick={() => {
                    this.setState({
                        val: this.state.val - this.props.step
                    });
                }}>
                    {'-'}
                </button>
            </div>
        );
    }
}