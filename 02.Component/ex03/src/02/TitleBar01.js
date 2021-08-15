import React, {Component} from 'react';

export default class TitelBar01 extends Component {
    constructor() {
        super(...arguments);
        // this.no = 10;
        this.state = {
            no: 10
        }
    }

    onClickHeader(e) {
        // this.no++;
        // console.log('TitelBar01 Click!!', ":", this.no);
        // this.render();

        console.log('TitelBar01 Click!!', ":", this.state.no);
        this.setState({
            no: this.state.no + 1
        });
    }

    render() {
        return (
            <h1 onClick={this.onClickHeader.bind(this)}
                style={{
                    cursor: 'pointer'
                }}>
                ex03 - Functional Event Handler(Class Component)
                {
                    /*this.no*/
                    this.state.no
                }
            </h1>
        )
    }
}