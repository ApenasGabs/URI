var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var item1 = lines.shift().split(" ");
var item2 = lines.shift().split(" ");


var total = 0


console.log("VALOR A PAGAR: R$",lines);