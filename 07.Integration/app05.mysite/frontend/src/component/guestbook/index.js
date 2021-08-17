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
                fetchMessage();
            }
        }

        window.addEventListener('scroll', handleWindowScroll);
        fetchMessage();

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        }
    }, []);

    useEffect(() => {
        console.log('update', messages);
    });


    const setMessages = function(messages) {
        messagesRef.current = messages;
        _setMessages(messages);
    }

    const notifyMessage = {
        delete: function (no) {
            setMessages(messages.filter((message) => message.no != no));
        },
        add: async function (message) {
            const response = await fetch('/api/guestbook', {
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
        console.log('[01. Enter]', ' Fetching');
        if (isFetching === true) {
            console.log('[Prevent]', ' Fetching -------');
            return;
        }

        isFetching = true;
        console.log('[02.Start]', ' Fetching');

        console.log('????', messages, messagesRef);
        const startNo = messages.length === 0 ? 0 : messages[messages.length - 1].no;

        try {
            const response = await fetch(`/api/guestbook/${startNo}`, {
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

            // setMessages([...messages, ...json.data]);
            json.data.length > 0 && setMessages([...messages, ...json.data]);
            console.log('[03End]', ' Fetching');
            isFetching = false;

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <MySiteLayout>
            <div className={styles.Guestbook}>
                <h1>방명록</h1>
                <WriteForm notifyMessage={notifyMessage}/>
                <MessageList messages={messages} notifyMessage={notifyMessage}/>
            </div>
        </MySiteLayout>
    );
}