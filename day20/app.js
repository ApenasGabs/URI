var input = require('fs').readFileSync('stdin', 'utf8');
var diasAno = input.split('\n');
var ano = parseInt(diasAno/365 );
var restoano = (diasAno%365);
var mes = parseInt(restoano/30);
var dias = (restoano%30);
console.log(ano + " ano(s)"+ '\n'+mes + " mes(es"+ '\n'+dias + " dia(s)");