// const produto = { nome: 'Produto', preco: 1.80};
// const caneca = {
//    ...produto,
//     material: 'porcelana'
// };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// ****************************************

// const produto = { nome: 'Produto', preco: 1.80};
// const caneca = Object.assign({}, produto, {material: 'porcelana'}); // copia tudo de produto para esse objeto

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// ****************************************

// getOwnPropertyDescriptor
// const produto = { nome: 'Produto', preco: 1.80};
// Object.defineProperty(produto, 'nome', {
//    writable: false,
//    configurable: false,
//    value: 'Qualquer outra coisa'
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// produto.nome = 'Outra coisa';
// console.log(produto);

// ****************************************

const produto = { nome: 'Produto', preco: 1.80, material: 'porcelana'};

for (let [chave, valor] of Object.entries(produto)) {
   console.log(chave, valor);
}