

var input = require('fs').readFileSync('input', 'utf8');//Leitor de arquivos .readFileSync


var lines = input.split('\n');
// parseInt é um conversor para int assim como parseFloat e para quebrados
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
// .shift() remove do Array
var X = A + B
console.log(typeof lines);
console.log("X =",X);
