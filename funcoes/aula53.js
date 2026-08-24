// Escopo global
function retornaFuncao(nome) { // Escopo mãe
   return function () { // Essa função tem acesso á três escopos... O escopo dela, da mãe dela e o global
      return nome; 
   };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Guilherme');
console.dir(funcao); 
console.dir(funcao2); 

console.log(funcao(), funcao2());