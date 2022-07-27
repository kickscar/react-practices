import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
};

let updateOrder1 = state.order;
updateOrder1.receive = '서울시 강남구 논현동...';

console.log(state.order, updateOrder1, state.order === updateOrder1);

console.log("=============================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
};

let updateOrder2 = Object.assign({}, state.order, {
    receive: '서울시 강남구 논현동...'
});

console.log(state.order, updateOrder2, state.order === updateOrder2);
