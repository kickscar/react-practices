import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('body');

export class Modal extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: false
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(this);
        if(!nextProps.show) {
            Modal.show = false;
            return null;
        }
        return {
            open: (Modal.show = !Modal.show),
        };
    }

    render() {
        return (
            <ReactModal
                isOpen={ this.state.open }
                contentLabel="Modal Example">
                { this.props.children }
                <button onClick={() => this.setState({open: false})}>
                    Close
                </button>
            </ReactModal>
        );
    }
}