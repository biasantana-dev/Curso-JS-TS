const pessoas = [
   { id: 2, nome: 'Maria' },
   { id: 3, nome: 'João' },
   { id: 1, nome: 'Helena' }
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//    const {id} = pessoa;
//    novasPessoas[id] = {...pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
   const {id} = pessoa;
   novasPessoas.set(id, {...pessoa});
}

for (const [identifier, {id, nome}] of novasPessoas) {
   console.log(identifier, id, nome);
}