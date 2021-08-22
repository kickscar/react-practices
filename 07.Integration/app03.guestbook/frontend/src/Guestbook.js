import React, {useEffect, useState, useRef} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    let isFetching = false;
    const outterRef = useRef(null);
    const innerRef = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessage();
    }, []);

    const notifyMessage = {
        delete: function (no) {
            setMessages(messages.filter((message) => message.no != no));
        },
        add: async function (message) {
            const response = await fetch('/api', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'applcation/json'
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
    }

    const fetchMessage = async function () {
        if(isFetching === true) {
            return;
        }

        isFetching = true;
        console.log('[02.Start]', ' Fetching');

        const startNo = messages.length === 0 ? 0 : messages[messages.length-1].no;

        try {
            const response = await fetch(`/api/${startNo}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'applcation/json'
                }
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw json.message;
            }

            json.data.length > 0 && setMessages([...messages, ...json.data]);
            isFetching = false;
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div
            ref={outterRef}
            className={styles.ScrollOuter}
            onScroll={e => {
                if (outterRef.current.scrollTop + outterRef.current.clientHeight > innerRef.current.clientHeight) {
                    fetchMessage();
                }
            }}>
            <div ref={innerRef}>
                <div className={styles.Guestbook}>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={notifyMessage}/>
                    <MessageList messages={messages} notifyMessage={notifyMessage}/>
                </div>
            </div>
        </div>
    );
}