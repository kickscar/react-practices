import React, {Fragment, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function MessageList({messages, notifyMessage}) {
    const refForm = useRef(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSubmit = function (e) {
        e.preventDefault();
    }

    const notifyDeleteMessage = function (no) {
        console.log('no:', no);
        setModalIsOpen(true);
    }

    return (
        <Fragment>
            <ul className={styles.Message__List}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message}
                                                  notifyMessage={notifyDeleteMessage}/>)}
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        onSubmit={handleSubmit}
                        ref={refForm}>
                        <input
                            type={'password'}
                            name={'password'}
                            placeholder={'비밀번호'}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={() => {
                        refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}));
                    }}>확인
                    </button>
                    <button onClick={() => setModalIsOpen(false)}>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}