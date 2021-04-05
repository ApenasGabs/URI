var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var array1 = lines.shift().split(" ");
var array2 = lines.shift().split(" ");
console.log(array1[2])

item1 = array1[2] * array1[1]
item2 = array2[2] * array2[1]
console.log(item1)

var total = item2+ item1

console.log("VALOR A PAGAR: R$",total.toFixed(2));