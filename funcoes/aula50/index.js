// arguments que sustenta todos os argumentos enviados
function funcaoSemParams() {
   let total = 0;
   for (let argumento of arguments) { //argumets não funciona em arrow functions
      total += argumento;
   }
   console.log(total);
}
funcaoSemParams(1, 2, 3, 4, 5, 6, 7);



function funcao({ nome, sobrenome, idade }) { // desestruturação
   console.log(nome, sobrenome, idade);
}
funcao({ nome: 'Pedro', sobrenome: 'Rodrigues', idade: 26 }); // objeto literal como argumentos


const conta = function (operador, acumulador, ...numeros) { // os três pontos ... são o rest operador - ele deve ser sempre o ultimo paramentro da função
   for(let numero of numeros) {
      if (operador === '+' )acumulador += numero; 
      if (operador === '-' )acumulador -= numero; 
      if (operador === '/' )acumulador /= numero; 
      if (operador === '*' )acumulador *= numero; 
   }

   console.log(acumulador);
}; 
conta('+', 1, 20, 30, 40, 50);