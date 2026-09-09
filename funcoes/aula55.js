// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {

   const sobrenome = 'Alves';
   function criaNome(nome) {
      return nome + ' ' + sobrenome;
   }

   function falaNome() {
      console.log(criaNome('João'));
   }

   falaNome();
   console.log(idade, peso, altura);
})(30, 70, 1.82); // aqui passamos os argumentos, no momento em que invocamos a função