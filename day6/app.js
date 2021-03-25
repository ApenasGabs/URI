var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = (parseFloat(lines.shift()))/10*3.5;
var b = (parseFloat(lines.shift()))/10*7.5;


MEDIA = (a + b)/1.10

console.log("MEDIA =", MEDIA.toFixed(5));
