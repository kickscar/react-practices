import React, {Fragment, useState} from 'react';
import Modal from "react-modal";
import styles from './modal.scss';

Modal.setAppElement('body');

export default function App() {
    const [modal01IsOpen, setModal01IsOpen] = useState(false);
    const [modal02IsOpen, setModal02IsOpen] = useState(false);
    const [modal03IsOpen, setModal03IsOpen] = useState(false);
    const [modal04IsOpen, setModal04IsOpen] = useState(false);
    const [modal05IsOpen, setModal05IsOpen] = useState(false);

    return (
        <Fragment>


            {/* example modal01: Minimal */}
            <button onClick={() => setModal01IsOpen(true)}>modal01</button>
            <br/><br/>
            <Modal
                isOpen={modal01IsOpen}
                contentLabel="modal01 example">
                <h1>modal01</h1>
                <button onClick={() => setModal01IsOpen(false)}>
                    Close
                </button>
            </Modal>


            {/* example modal02: Using onRequestClose */}
            <button onClick={() => setModal02IsOpen(true)}>modal02</button>
            <br/><br/>
            <Modal
                isOpen={modal02IsOpen}
                onRequestClose={() => setModal02IsOpen(false)}
                contentLabel="modal02 example">
                <h1>modal02</h1>
                <button onClick={() => setModal02IsOpen(false)}>
                    Close
                </button>
            </Modal>


            {/* example modal03: Using shouldCloseOnOverlayClick */}
            <button onClick={() => setModal03IsOpen(true)}>modal03</button>
            <br/><br/>
            <Modal
                isOpen={modal03IsOpen}
                onRequestClose={() => setModal03IsOpen(false)}
                shouldCloseOnOverlayClick={false}
                contentLabel="modal03 example">
                <h1>modal03</h1>
                <button onClick={() => setModal03IsOpen(false)}>
                    Close
                </button>
            </Modal>


            {/* example modal04: Using inline styles */}
            <button onClick={() => setModal04IsOpen(true)}>modal04</button>
            <br/><br/>
            <Modal
                isOpen={modal04IsOpen}
                onRequestClose={() => setModal04IsOpen(false)}
                shouldCloseOnOverlayClick={true}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                        backgroundColor: '#ccc'
                    }
                }}
                contentLabel="modal04 example">
                <h1>modal04</h1>
                <button onClick={() => setModal04IsOpen(false)}>
                    Close
                </button>
            </Modal>


            {/* example modal05: Using inline styles */}
            <button onClick={() => setModal05IsOpen(true)}>modal05</button>
            <br/><br/>

            <Modal
                isOpen={modal05IsOpen}
                onRequestClose={() => setModal05IsOpen(false)}
                shouldCloseOnOverlayClick={false}
                className={styles.Modal}
                overlayClassName={styles.Overlay}
                style={{content: {width: 350}}}
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    하하하하하하하~
                </div>
                <div className={styles['modal-dialog-buttons']}>
                    <button>확인</button>
                    <button onClick={() => setModal05IsOpen(false)}>취소</button>
                </div>
            </Modal>


        </Fragment>
    );
}