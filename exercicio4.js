//QUESTÃO 4

let estados = [
    { n: 67.83643, est: 'SP' },
    { n: 36.67866, est: 'RJ' },
    { n: 29.22988, est: 'MG' },
    { n: 27.16548, est: 'ES' },
    { n: 19.84953, est: 'Outros' }
]
let total = 0;
let porce = 0;
for (let dados of estados) {
    total += dados.n;
    console.log(` Porcentagem de ${ dados.est } = ${(dados.n / total) * 100}`)

}
console.log(`Valor Total: ${ total }`);

