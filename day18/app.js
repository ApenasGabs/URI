var input = require('fs').readFileSync('stdin', 'utf8');
var [hora, kmh] = input.split('\n').map(item => parseInt(item))
var total = ((hora * kmh) / 12).toFixed(3)
console.log(total);