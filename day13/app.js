var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

var A = lines.shift()
var B = lines.shift()
var C = lines.shift()


var triangulo = (A*C)/2
// var círculo de raio C. (pi = 3.14159)
// var trapézio  A e B por bases e C por altura.
// var quadrado que tem lado B.
// var retângulo que tem lados A e B
console.log(triangulo);