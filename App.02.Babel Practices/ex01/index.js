const babel = require('@babel/core');

const source = 'const fn = () => 1';
const result = babel.transform(source, {});

console.log(result);
