// const tresHotas = 60 * 60 * 3 * 1000;
// const data = new Date(2019, 3); // a, m, d, h, M, s, ms
const data = new Date('2019-04-20 20:20:59')
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());