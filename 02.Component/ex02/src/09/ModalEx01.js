import React, {useState, useEffect} from 'react';
import ReactModal from "react-modal";

export default function ModalEx01({ close }) {
    return (
        <ReactModal
            isOpen={true}
            contentLabel="Modal Example">
            <h1>ModalEx01</h1>
            <button onClick={() => {
                close();
            } }>
                Close
            </button>
        </ReactModal>
    );
}