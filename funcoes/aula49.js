// declaração de função (Function hoisting)
falaOi(); // pode ser chamada antes
function falaOi() { // Só quando declaramos a função dessa maneira, que ocorre o hoisting
   console.log('Oie');
}

// First-Class Objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () { // funcão guardada dentro de uma constante
   console.log('Sou um dado.');
};

function executaFuncao(funcao) { // podemos usar uma função como parâmentro de outra função
   console.log('Vou executar sua função abaixo:');
   funcao();
}
executaFuncao(souUmDado); // aqui chamamos essa função e executamos aquela constante como parâmentro

// Arrow function - es2015
const FuncaoArrow = () => {// para fazer a declaração arrow, primeiro abrimos os (), seguido da => e abrimos o bloco de função com {}
   console.log('Sou uma arrow function');
}
FuncaoArrow();

// dentro de um objeto 
const obj = { // function como método dentro do objeto
   falar() {
      console.log('Estou falalndo...')
   }
};
obj.falar();