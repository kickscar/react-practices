import React, {useEffect, useState} from 'react';
import update from 'react-addons-update';
import data from './assets/json/data.js';

function App() {
    const [order, setOrder] = useState(data);
    const [goods, setGoods] = useState(order.goods);
    const [payment, setPayment] = useState(order.payment);

    useEffect(() => {
        console.log("Order Updated");
    }, [order]);

    useEffect(() => {
        console.log("Payment's Method Updated");
    }, [payment]);

    useEffect(() => {
        console.log("Goods Updated");
    }, [goods]);

    return (
        <div id='App'>
            <button onClick={() => {
                // violation
                // order.receive = '서울시 서초구 논현동...';
                // setOrder(order);

                // sol.
                // const orderUpdated = Object.assign({}, order, {receive: '서울시 서초구 논현동...'});
                // setOrder(orderUpdated);

                // sol. recommended: 프로퍼티 변경
                const orderUpdated = update(order, {
                    receive: {
                        $set: '강남구 논현동'
                    }
                });
                setOrder(orderUpdated);
            }}>
                {"배송지 수정"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation
                // const orderUpdated = Object.assign({}, order);
                // orderUpdated.payment.method = 'Mobile';
                // setPayment(orderUpdated.payment);

                // sol.
                // const orderUpdated = Object.assign({}, order);
                // orderUpdated.payment = Object.assign({}, orderUpdated.payment, {method: 'Mobile'});
                // setPayment(orderUpdated.payment);

                // sol. recommended: nest 객체 프로퍼티 변경
                const orderUpdated = update(order, {
                    // nest 객체 프로퍼티 변경
                    payment: {
                        method: {
                            $set: 'Mobile'
                        }
                    }
                });
                setPayment(orderUpdated.payment);
            }}>
                {"결제수단 변경"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation
                // order.goods.push({no: 'c002-003', name: '블루양말', price: 2000, amount: 1});
                // setGoods(order.goods);

                // sol.1
                // order.goods = order.goods.concat({no: 'c002-003', name: '블루양말', price: 2000, amount: 1});
                // setGoods(order.goods);

                // sol.2
                // order.goods = order.goods.concat({no: 'c002-003', name: '블루양말', price: 2000, amount: 1});
                // setGoods(order.goods);

                // sol.recommended: 배열요소 추가
                order.goods = update(order.goods, {
                    $push: [{
                        no: "s002-002",
                        name: "블루 양말",
                        price: 2000,
                        amount: 10
                    }]
                });
                setGoods(order.goods);
            }}>
                {"상품 추가"}
            </button>
            <br/><br/>

            <button onClick={() => {
                // violation
                // order.goods[1].name = '블루면티';
                // setGoods(order.goods);

                // sol.
                // order.goods = [...order.goods.slice(0, 2), Object.assign({}, order.goods[2], {name: '블루면티'}), ...order.goods.slice(3)];
                // setGoods(order.goods);

                // sol.recommended: 배열 요소 객체 프로퍼티 변경
                order.goods =  update(order.goods, {
                    2: {
                        name: {
                            $set: '블루면티'
                        }
                    }
                });
                setGoods(order.goods);
            }}>
                {"3rd 상품이름 변경"}
            </button>
            <br/><br/>

            <hr/>

            <p>{`배송지: ${order.receive}`}</p>
            <p>{`결제수단: ${payment.method}`}</p>
            <p>{'상품'}</p>
            <ul>
                {goods.map(g => <li key={g.no}>{`${g.name}:${g.amount}:${g.price}`}</li>)}
            </ul>

        </div>
    );
}

export {App};