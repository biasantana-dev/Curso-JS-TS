function mostrarTimer() {
   let timer = new Date('01-01-1970 00:00:00');
   return timer.toLocaleTimeString('pt-br', {
      hour12: false
   });
}
console.log(mostrarTimer());



const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function (event) {
   relogio.innerHTML =  mostrarTimer(setInterval(1000));
});

pausar.addEventListener('click', function (event) {
   alert('Cliquei no pausar')
});

zerar.addEventListener('click', function (event) {
   alert('Cliquei no zerar')
});
