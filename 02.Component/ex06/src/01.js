import fs from 'fs';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
};

let updateProducts1 = state.order.products;
updateProducts1.push({
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts1, state.order.products === updateProducts1);

console.log("=============================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
};

let updateProducts2 = state.order.products.concat({
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts2, state.order.products === updateProducts2);

console.log("=============================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
};

let updateProducts3 = [...state.order.products, {
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
}];

console.log(state.order.products, updateProducts3, state.order.products === updateProducts3);