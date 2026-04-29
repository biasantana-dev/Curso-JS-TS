const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() { // cria a tag li para dentro do HTML
   const li = document.createElement('li');
   return li;
}

inputTarefa.addEventListener('keypress', function (e) { // para saber qual tecla foi precisionada 
   if (e.keyCode === 13) { // keyCode é a numeração que cada tecla tem 
      if (!inputTarefa.value) return;
      criaTarefa(inputTarefa.value);
   }
});

function limpaInput() { // para limpar o input depois de adicionar a tarefa
   inputTarefa.value = '';
   inputTarefa.focus();
}

function criaBotaoApagar(li) { // para criar o botão de apagar as tarefas criadas
   li.innerHTML += ' ';
   const botaoApagar = document.createElement('button');
   botaoApagar.innerText = 'Apagar'; // pode ser usado .innerHTML ou .innerText 
   // botaoApagar.classList.add('apagar');
   botaoApagar.setAttribute('class', 'apagar'); // adiciona a classe - classe, valor
   botaoApagar.setAttribute('title', 'Apagar esta tarefa');
   li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) { 
   const li = criaLi();
   li.innerHTML = textoInput;
   tarefas.appendChild(li);
   limpaInput();
   criaBotaoApagar(li);
   salvarTarefas();
}

btnTarefa.addEventListener('click', function () {
   if (!inputTarefa.value) return;
   criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) { // para remover tarefa criada
   const el = e.target;
   
   if (el.classList.contains('apagar')) {
      el.parentElement.remove(); 
      salvarTarefas();
   }
})

function salvarTarefas() {
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];
   for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // substitui a palavra apagar por '', pois assim somente o texto da tarefa será utilizado aqui //
      listaDeTarefas.push(tarefaTexto);
   }

   const tarefasJSON = JSON.stringify(listaDeTarefas) // converte o array em string
   // 'tarefas' = nome - tarefasJSON = valor
   localStorage.setItem('tarefas', tarefasJSON) //local no navegador onde posso salvar coisas (mini base de dados)  
}

function adicionaTarefasSalvas() { // para converter as tarefas de volta para array
   const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefas);
   
   for (let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
   }
}

adicionaTarefasSalvas();