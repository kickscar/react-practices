import React, {useEffect, useState, useRef} from 'react';
import WriteForm from './WriteForm';
import MessageList from './MessageList';
import styles from './assets/scss/Guestbook.scss';

export default function Guestbook() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);
    const [messages, setMessages] = useState([]);

    useEffect(async () => {
        try {
            await fetchMessage();
        } catch (err) {
            console.error(err);
        }
    }, []);

    const notifyMessage = {
        delete: async function(no, password) {
            console.log(no, password);

            // const response = await fetch(`/api/${no}`, {
            //     method: 'delete',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'applcation/json'
            //     },
            //     body: JSON.stringify({
            //         password: password
            //     })
            // });
            //
            // if (!response.ok) {
            //     throw new Error(`${response.status} ${response.statusText}`);
            // }
            //
            // const json = await response.json();
            // if (json.result !== 'success') {
            //     throw json.message;
            // }
            //
            // setMessages(messages.filter((message) => message.no != parseInt(json.data)));
        },
        add: async function(message) {
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
        const response = await fetch('/api', {
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

        setMessages(...messages, json.data);
    }

    return (
        <div
            ref={ outterRef }
            className={ styles.ScrollOuter }
            onScroll={ e => {
                if(outterRef.current.scrollTop + outterRef.current.clientHeight > innerRef.current.clientHeight){
                    console.log("Fetch!!!");
                }
            } }>
            <div ref={ innerRef }>
                <div className={ styles.Guestbook }>
                    <h1>방명록</h1>
                    <WriteForm notifyMessage={ notifyMessage }/>
                    <MessageList messages={ messages } notifyMessage={ notifyMessage }/>
                </div>
            </div>
        </div>
    );
}