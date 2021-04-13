var input = require('fs').readFileSync('stdin', 'utf8');
var [X, Y] = input.split('\n').map(item => parseFloat(item));

total = (X / Y).toFixed(3)
console.log(total+" km/l");