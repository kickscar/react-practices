import React, {Component} from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: this.props.begin
        }
    }

    onClickButton() {
        // this.state.value = this.state.value + this.props.step
        this.setState({
            value: this.state.value + this.props.step
        });
    }

    render() {
        return (
            <div>
                <button onClick={ this.onClickButton.bind(this) }>
                    <strong>+</strong>
                </button>
                { ' ' }
                <span>{ this.state.value }</span>
                { ' ' }
                <button>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}