import React, {useEffect, useState, useRef} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from '../../assets/scss/component/guestbook/Guestbook.scss';
import Modal from "react-modal";
import modalStyles from "../../assets/scss/component/modal/modal.scss";

export default function Guestbook() {
    let isFetching = false;

    const [modalData, setModalData] = useState({
        no: 0,
        password: '',
        errorMessage: null,
        open: false
    });
    const refDeleteForm = useRef(null);

    const [messages, _setMessages] = useState([]);
    const messagesRef = useRef(messages);

    useEffect(() => {
        const handleWindowScroll = function () {
            const documentHeight = window.document.body.offsetHeight;
            const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
            const scrollTop = document.documentElement.scrollTop;
            if (viewportHeight + scrollTop + 10 > documentHeight) {
                fetchMessages.call(this);
            }
        }

        window.addEventListener('scroll', handleWindowScroll);
        fetchMessages.call(this);

        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, []);

    const setMessages = (messages) => {
        messagesRef.current = messages;
        _setMessages(messages);
    }

    const deleteMessage = (no) => {
        setModalData({
            no: no,
            errorMessage: '',
            password: '',
            open: true
        });
    };

    const addMessage = async (message) => {
        const response = await fetch('/api/guestbook', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(message)
        });

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        if (json.result !== 'success') {
            throw json.message;
        }

        setMessages([json.data, ...messages]);
    }

    const fetchMessages = async function () {
        if (isFetching) {
            return;
        }
        isFetching = true;

        const messagesInState = this ? messagesRef.current : messages;
        const startNo = messagesInState.length === 0 ? 0 : messagesInState[messagesInState.length - 1].no;
        try {
            const response = await fetch(`/api/guestbook?no=${startNo}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw json.message;
            }

            json.data.length > 0 && setMessages([...messagesInState, ...json.data]);
            isFetching = false;
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <div className={styles.Guestbook}>
                <h2>방명록</h2>
                <WriteForm addMessage={addMessage}/>
                <MessageList messages={messages} deleteMessage={deleteMessage}/>
            </div>
            <Modal
                isOpen={modalData.open}
                shouldCloseOnOverlayClick={false}
                className={modalStyles.Modal}
                overlayClassName={modalStyles.Overlay}
                style={{content: {width: 350}}}>
                <h1>방명록 삭제</h1>
                <div>
                    <form
                        ref={refDeleteForm}
                        className={styles.DeleteForm}
                        onSubmit={async (e) => {
                            try {
                                const response = await fetch(`/api/guestbook/${e.target.no.value}`, {
                                    method: 'delete',
                                    headers: {
                                        'Content-Type': 'application/x-www-form-urlencoded',
                                        'Accept': 'application/json'
                                    },
                                    body: `password=${e.target.password.value}`
                                });

                                if (!response.ok) {
                                    throw new Error(`${response.status} ${response.statusText}`);
                                }

                                const json = await response.json();
                                if (json.result !== 'success') {
                                    throw json.message;
                                }

                                if(!json.data) {
                                    setModalData( Object.assign({}, modalData, {
                                        password: '',
                                        errorMessage: '비밀번호가 틀립니다.'
                                    }));

                                    return;
                                }

                                setModalData({
                                    no: 0,
                                    password: '',
                                    errorMessage: null,
                                    open: false
                                });
                                setMessages(messages.filter((message) => message.no != json.data));

                            } catch (err) {
                                console.error(err);
                            }
                        }}>
                        <input type={'hidden'} name={'no'} value={modalData.no}/>
                        <input
                            type={'password'}
                            name={'password'}
                            placeholder={'비밀번호'}
                            value={modalData.password}
                            onChange={(e) => setModalData(Object.assign({}, modalData, {password: e.target.value}))}
                            autoFocus={true} />
                        <p>{modalData.errorMessage}</p>
                    </form>
                </div>
                <div className={modalStyles['modal-dialog-buttons']}>
                    <button onClick={() => refDeleteForm.current.dispatchEvent(new Event("submit", {cancelable: true, bubbles: true}))}>확인</button>
                    <button onClick={() => setModalData({
                        no: 0,
                        password: '',
                        errorMessage: null,
                        open: false
                    })}>취소</button>
                </div>
            </Modal>
        </>
    );
}