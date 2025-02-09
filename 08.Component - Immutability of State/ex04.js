import fs from 'fs';
import update from 'react-addons-update';

console.log("== Sol ============================================");
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder = update(state.order, {
    // 프로퍼티 변경
    receive: {
        $set: '강남구 논현동'
    },
    // nest 객체 프로퍼티 변경
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    products: {
        // 배열 요소 객체 프로퍼티 변경
        0: {
           amount: {
                $set: 200 
           } 
        },
    
        // 배열요소 추가
        $push: [{
            no: "s002-002",
            name: "블루 양말",
            price: 2000,
            amount: 10
        }]
    }
    
});
console.log(updateOrder, state.order);