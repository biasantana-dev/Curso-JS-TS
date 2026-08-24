function mostraHora() {
   let data = new Date();

   return data.toLocaleTimeString('pt-br', {
      hour12: false
   });
}
console.log(mostraHora())
 setInterval(function () { // função anônima para chamar a função mostrarHora... 
    console.log(mostraHora());
 }, 1000); //  O '1000' se refere a milisegundo


 const timer = setInterval(function () { 
    console.log(mostraHora());
 }, 1000);  

 setTimeout(function() {
    clearInterval(timer);
 }, 3000);

 setTimeout(function() {
    console.log('Olá mundo!');
 }, 5000);