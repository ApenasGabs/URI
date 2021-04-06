var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
raio = parseInt(lines.shift())
calculo = (4/3)*3.14159*Math.pow(raio,3)

console.log("VOLUME =",  calculo.toFixed(3));