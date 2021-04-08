var input = require('fs').readFileSync('stdin', 'utf8');
var [A, B, C] = input.split(' ').map(item =>parseInt(item) );

if (A > B && A > C) {
    console.log(A + " eh o maior");
}
if (B > A && B > C) {
    console.log(B+ " eh o maior");
}
if (C > B && C > A) {
    console.log(C+ " eh o maior");
}