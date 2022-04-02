import React, {Fragment, useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Message from './Message';
import styles from '../../assets/scss/component/guestbook/MessageList.scss';
import modalStyles from '../../assets/scss/component/modal/modal.scss';

Modal.setAppElement('body');

export default function MessageList({messages, notifyDeleteMessage}) {
    const refForm = useRef(null);
    const [modalData, setModalData] = useState({isOpen: false});

    useEffect(() => {
        setTimeout(() => {
            refForm.current && refForm.current.password.focus();
        }, 200);
    }, [modalData]);

    const handleSubmit = async function (e) {
        e.preventDefault();
        try {
            if (e.target.password.value === '') {
                return;
            }

            const response = await fetch(`/api/guestbook/${modalData.messageNo}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: `password=${e.target.password.value}`
            });

            if (!response.ok) {
                throw `${response.status} ${response.statusText}`;
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw json.message;
            }

            if (json.data === null) {
                setModalData(Object.assign({}, modalData, {
                    label: '비밀번호가 일치하지 않습니다.',
                    password: ''
                }));
                return;
            }

            setModalData({isOpen: false, password: ''});
            notifyDeleteMessage(json.data);
        } catch (err) {
            console.error(err);
        }
    }

    const notifyModalDeleteMessage = function (no) {
        setModalData({
            label: '글 작성시 입력했던 비밀번호를 입력하세요.',
            password: '',
            isOpen: true,
            messageNo: no
        });
    }

    return (
        <Fragment>
            <ul className={styles.MessageList}>
                {messages.map(message => <Message key={`guestbook_message_${message.no}`}
                                                  no={message.no}
                                                  name={message.name}
                                                  message={message.message}
                                                  notifyModalDeleteMessage={notifyModalDeleteMessage}/>)}
            </ul>
            <Modal
                isOpen={modalData.isOpen}
                onRequestClose={() => setModalData({isOpen: false, password: ''})}
                shouldCloseOnOverlayClick={true}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        onSubmit={handleSubmit}
                        className={styles.DeleteForm}
                        ref={refForm}>
                        <label>{modalData.label || ''}</label>
                        <input
                            type={'password'}
                            autoComplete={'off'}
                            name={'password'}
                            placeholder={'비밀번호'}
                            value={modalData.password}
                            onChange={(e) => setModalData(Object.assign({}, modalData, {password: e.target.value}))}
                        />
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={() => refForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}))}>확인</button>
                    <button onClick={() => setModalData({isOpen: false, password: ''})}>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}

MessageList.propType = {
    message: PropTypes.arrayOf(PropTypes.shape(Message.propType))
}