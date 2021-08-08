import React, { Fragment, useState } from 'react';
import Modal from "react-modal";
import ReactModal from "react-modal";

ReactModal.setAppElement('body');

export default function App() {
    const [ex01Open, setEx01Open] = useState(false);

    return (
        <Fragment>
            <button onClick={ () => setEx01Open(true) }>Show Modal01</button>
            <br/><br/>

            {/* example modal01 */}
            <Modal
                isOpen={ex01Open}
                contentLabel="Modal Example">
                <h1>ModalEx01</h1>
                <button onClick={ () => setEx01Open(false) }>
                    Close
                </button>
            </Modal>

        </Fragment>
    );
}