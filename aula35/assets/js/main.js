const elementos = [
{tag: 'p', texto: 'Frase 1'},
{tag: 'div', texto: 'Frase 2'},
{tag: 'footer', texto: 'Frase 3'},
{tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
injetHtml = '';

for (let i = 0; i < elementos.length; i++) {
   let {tag, texto} = elementos[i];
   injetHtml += `<${tag}>${texto} </${tag}>`;
}

container.innerHTML += `<div>${injetHtml}</div>`;