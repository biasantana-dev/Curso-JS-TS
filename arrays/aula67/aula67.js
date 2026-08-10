const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => {
   acumulador += valor;
   return acumulador;
});
// console.log(total);


// retornar pessoa mais velha
const pessoas = [
   { nome: 'Luiz', idade: 62 },
   { nome: 'Maria', idade: 23 },
   { nome: 'Eduardo', idade: 55 },
   { nome: 'Letícia', idade: 10 },
   { nome: 'Rosana', idade: 64 },
   { nome: 'Wallace', idade: 63 }
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
   if (acumulador.idade > valor.idade) return acumulador;
   return valor
});

console.log(maisVelha);