const elementos = [
   {tag: 'p', texto: 'Frase 1'},
   {tag: 'div', texto: 'Frase 2'},
   {tag: 'footer', texto: 'Frase 3'},
   {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
   let {tag, texto} = elementos[i];
   let tagCriada = document.createElement(tag);
   tagCriada.innerText = texto;
   
   // let textoCriado = document.createTextNode(texto); // Node Texto
   // tagCriada.appendChild(textoCriado);
   div.appendChild(tagCriada);
}

container.appendChild(div);




















// const elementos = [
// {tag: 'p', texto: 'Frase 1'},
// {tag: 'div', texto: 'Frase 2'},
// {tag: 'footer', texto: 'Frase 3'},
// {tag: 'section', texto: 'Frase 4'}
// ];

// const container = document.querySelector('.container');
// injetHtml = '';

// for (let i = 0; i < elementos.length; i++) {
//    let {tag, texto} = elementos[i];
//    injetHtml += `<${tag}>${texto} </${tag}>`;
// }

// container.innerHTML += `<div>${injetHtml}</div>`;

