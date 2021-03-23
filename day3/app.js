var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159
var raio2 = Math.pow(parseFloat(lines), 2)
var area = pi* raio2
console.log("A="+ area);