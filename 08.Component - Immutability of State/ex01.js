import fs from 'fs';

console.log("== Violation ===================================");
let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
});
console.log(state.order.products, updateOrderProducts1, state.order.products === updateOrderProducts1);



console.log("== Sol1 ========================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts2 = state.order.products.concat({
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1
});
console.log(state.order.products, updateOrderProducts2, state.order.products === updateOrderProducts2);



console.log("== Sol2 ========================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
};

const updateOrderProducts3 = [...state.order.products, {
    no: 'c002-003',
    name: '블루양말',
    price: 2000,
    amount: 1  
}];
console.log(state.order.products, updateOrderProducts3, state.order.products === updateOrderProducts3);



