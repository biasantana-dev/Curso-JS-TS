const nome = 'Pedro';

function falaNome() {
   console.log(nome);
}

function usaFalaNome() {
   const nome = 'Natan';
   falaNome();
}

usaFalaNome();