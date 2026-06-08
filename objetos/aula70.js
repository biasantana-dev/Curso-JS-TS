// notação literal
// const pessoa = {
//    nome: 'Luiz',
//    sobrenome: 'Martins'
// };

// objeto generico
// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Martins';
// pessoa1.idade = 2;
// pessoa1.falarNome = function() {
//    return (`${this.nome} está falando seu nome.`);
// };
// pessoa1.getDataNascimento = function() {
//    const dataAtual = new Date();
//    return dataAtual.getFullYear() - this.idade;
// };

// for (let chave in pessoa1) {
//    console.log(pessoa1[chave]);
// }


// Factory function
// function criaPessoa(nome, sobrenome) {
//    return { 
//       nome, 
//       sobrenome,
//       get nomeCompleto() {
//          return `${this.nome} ${this.sobrenome}`;         
//       }
//    };
// }

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);


// Constructor function
function Pessoa(nome, sobrenome) {
   this.nome = nome;
   this.sobrenome = sobrenome;
   
   Object.freeze(this); // isso faz com que nenhum objeto dessa função possa ser alterado // pode ser perigoso
   // return this; 
}

// A palavra new cria um objeto vazio {}, e ela vai pegar a palavra 'this' e atrelar o 'this' da função a esse objeto
const p1 = new Pessoa('João', 'Silva');
// p1 = (endereco de memoria) -> 'valor'
// p1.enderecoMemoria = {nome: 'Outra coisa'}
p1.nome = 'Outra coisa';
// não pode fazer: p1 = (novo endereco de memoria)
// p1 = 'Outra coisa' // erro
const p2 = new Pessoa('Ana', 'Rodrigues');

console.log(p1);
console.log(p2);