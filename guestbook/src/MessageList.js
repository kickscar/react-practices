import React, {Fragment, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from './assets/scss/MessageList.scss';
import modalStyles from "./assets/scss/modal.scss";

Modal.setAppElement('body');

export default function MessageList({messages}) {
    const refForm = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message} />)}
            </ul>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form className={styles.DeleteForm}>
                        <label>작성시 입력했던 비밀번호를 입력 하세요.</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            placeholder={'비밀번호'}/>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button>확인</button>
                    <button onClick={() => setIsOpen(false)}>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}