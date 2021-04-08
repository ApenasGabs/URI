var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C] = input.split(' ').map(item => parseInt(item));



const maiorAB = (A + B + Math.abs(A - B)) / 2
if (A > B && A > C);

const maiorXC = (maiorAB + C + Math.abs(maiorAB - C)) / 2
console.log(maiorXC,'eh o maior');