function mostraHora() {
   let data = new Date();

   return data.toLocaleTimeString('pt-br', {
      hour12: false
   });
}

// setInterval(function () { // função anônima para chamar a função mostrarHora... 
//    console.log(mostraHora());
// }, 1000); // O '1000' se refere a milisegundo


const timer = setInterval(function () { // O setInterval pode ser colocado dentro de uma variável
   console.log(mostraHora());
}, 1000);  

setTimeout(function() {
   clearInterval(timer);
}, 3000);

setTimeout(function() {
   console.log('Olá mundo!');
}, 5000);