const calculateSum = require('./calculateSum');

const coll1 = [8, 9, 21, 19, 18, 22, 7];
console.log(calculateSum.calculateSum(coll1)); // 48

const coll2 = [2, 0, 17, 3, 9, 15, 4];
console.log(calculateSum.calculateSum(coll2)); // 27

const coll = [];
console.log(calculateSum.calculateSum(coll)); // 0