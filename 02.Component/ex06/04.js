import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
};

// @ts-ignore
let updateOrder = update(state.order, {
    // 해당 패스 값 변경
    receive: {
        $set: '서울시 강남구 논현동...'
    },
    // 해당 패스 값 변경
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    products: {
        // 배열 인덱스로 찾아 변경
        0: {
            amount: {
                $set: 5
            }
        },
        // 배열 요소 새로 추가
        $push: [{
            "no": "s002-002",
            "name": "블루 양말",
            "price": 2000,
            "amount": 1
        }]
    }
});

console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment,
    state.order.products == updateOrder.products);
