import React, {useEffect, useState} from 'react';
import update from 'react-addons-update';
import data from './assets/json/data.js';

function GoodsList({goods}) {

    goods.push({no: 'c002-003', name: '블루양말', price: 2000, amount: 1});

    return (
        <ul>
            {goods.map((g,i) => <li key={i}>{`${g.name}:${g.amount}:${g.price}`}</li>)}
        </ul>
    );
}

function App() {
    const [order, setOrder] = useState(data);

    useEffect(() => {
        console.log('After Rendering');
    });

    return (
        <div id='App'>
            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제수단: ${order.payment.method}`}</p>
            <p>{'상품'}</p>
            <GoodsList goods={order.goods}/>
            <button onClick={() => {
                setOrder(update(order, {
                    receive: {
                        $set: '강남구 논현동'
                    }
                }));
            }}>
                {"배송지 수정"}
            </button>
        </div>
    );
}

export {App};