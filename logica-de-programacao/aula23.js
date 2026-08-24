/*
 && -> false && true -> false "é valor mesmo"
 || ->  vai retornar "o valor verdadeiro"

FALSY values
 *false 
0
'' "" ``
null / undefined
NaN
 */

const a = 0;
const b = null;
const c = 'false'; // String que contém um valor = verdadeiro 
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // exibirá 'false'
