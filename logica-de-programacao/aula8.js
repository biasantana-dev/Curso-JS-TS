/*
    Luiz Miranda tem 30 anos, pesa 84 kg 
    tem 1.8 de altura e seu IMC é de 25.9
    Luiz nasceu em 1980
*/


const nome = 'Beatriz';
const sobrenome = 'Santana';
const idade = 25;
const peso = 45;
const alturaEmM = 1.56;
let indiceMassaCorporal;
let anoNascimento; 

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2026 - idade;

// template string  - ${valor da variavel}

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);