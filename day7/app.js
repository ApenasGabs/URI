var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = (parseFloat(lines.shift()))/10*2;
var b = (parseFloat(lines.shift()))/10*3;
var c = (parseFloat(lines.shift()))/10*5;


MEDIA = (a + b + c)/1

console.log("MEDIA =", MEDIA.toFixed(1));
