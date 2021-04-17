var input = require('fs').readFileSync('stdin', 'utf8');
var totsec = input.split('\n');

var hr = parseInt(totsec/3600)
var Tmin = parseInt(totsec%3600)
var min = parseInt(Tmin/60)
var sec = parseInt(Tmin%60)

console.log(`${hr}:${min}:${sec}`);
