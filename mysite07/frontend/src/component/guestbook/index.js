import React, {useEffect, useState, useRef} from 'react';
import MySiteLayout from "../../layout/MySiteLayout";
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from '../../assets/scss/component/guestbook/Guestbook.scss';

export default function Guestbook() {
    let isFetching = false;
    const [messages, _setMessages] = useState([]);
    const messagesRef = useRef(messages);

    useEffect(() => {
        const handleWindowScroll = function () {
            const documentHeight = window.document.body.offsetHeight;
            const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
            const scrollTop = document.documentElement.scrollTop;
            if (viewportHeight + scrollTop + 10 > documentHeight) {
                fetchMessage.call(this);
            }
        }

        window.addEventListener('scroll', handleWindowScroll);
        fetchMessage.call(this);

        return () => window.removeEventListener('scroll', handleWindowScroll);
    }, []);

    const setMessages = (messages) => {
        messagesRef.current = messages;
        _setMessages(messages);
    }

    const notifyDeleteMessage = (no) => {
            setMessages(messages.filter((message) => message.no != no));
    };
    
    const notifyAddMessage = async (message) => {
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

    const fetchMessage = async function () {
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
        <MySiteLayout>
            <div className={styles.Guestbook}>
                <h2>방명록</h2>
                <WriteForm notifyAddMessage={notifyAddMessage}/>
                <MessageList messages={messages} notifyDeleteMessage={notifyDeleteMessage}/>
            </div>
        </MySiteLayout>
    );
}