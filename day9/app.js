var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var NUMBER = lines.shift();
var time = parseInt(lines.shift());
var money = parseFloat(lines.shift());

var SALARY = (time*money);

console.log( "NUMBER =",NUMBER,);
console.log("SALARY = U$",SALARY.toFixed(2));