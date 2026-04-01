// Capturar evento de submut do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
   e.preventDefault();
   console.log('Evento previnido.');
   setResultado('Olá mundo!');
});

function criaP () {
   const p = document.createElement('p');
   p.classList.add('paragrafo-resultado');
   p.innerHTML = 'Qualquer coisa';
}

function setResultado(msg) {
   const resultado = document.querySelector('#resultado');
   resultado.innerHTML = '';
   resultado.appendChild(p);
}