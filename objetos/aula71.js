// defineProperty = uma propriedade - defineProperties = mais de uma propriedade
function Produto(nome, preco, estoque) {
   Object.defineProperty(this, 'estoque', {
      enumerable: true, // mostra a chave
      writable: false, // pode alterar o valor
      configurable: true, // configuravel
      value: estoque // valor
   });

   Object.defineProperties(this, {
      nome: {
         enumerable: true,
         value: nome,
         writable: true,
         configurable: true
      },

      preco: {
         enumerable: true,
         value: preco,
         writable: true,
         configurable: true
      }
   });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 500000;
console.log(p1);

for (let chave in p1) {
   console.log(chave);
}