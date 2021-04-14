var input = require('fs').readFileSync('stdin', 'utf8');
var totsec = input.split('\n');

var hr = parseInt(totsec/3600)
var sec = parseInt(totsec%60)
var sec = parseInt()
console.log(hr+":"+min+":"+ sec);