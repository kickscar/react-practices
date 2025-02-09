import fs from 'fs';


console.log("== Violation ===================================");
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

let updateOrder1 = state.order;
updateOrder1.receive = '강남구 서초구...';
console.log(state.order, updateOrder1, updateOrder1 === state.order);

console.log("== Sol =========================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrder2 = Object.assign({}, state.order, {receive: "강남구 서초구..."});
console.log(updateOrder2, state.order, updateOrder2 === state.order);