//QUESTÃO NUMERO 1
/*
let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);
RESULTADO: 91
*/


//QUESTÃO NUMERO 2
/*
let i;
let fibo = [];

fibo[0] = 0;
fibo[1] = 1;

for (i = 2; i <= 10; i++) {
    //Fn = (Fn - 2) + (Fn - 1)
    fibo[i] = fibo[i - 2] + fibo[i - 1];
    console.log(fibo[i]);
}
*/

//QUESTÃO 3
/*
let dados = require('./dados.json')
let diam, dian, maior, menor, cont, i = 0;
let novo = 0;
let contm = 0;


for (let da of dados) {

    novo += da.valor;
    if (da.valor > (novo / dados.length)) {
        contm++;
    }
    if (i == 0) {
        maior = da.valor;
        menor = da.valor;
        i++;
    }
    else if (da.valor > maior) {
        maior = da.valor;
        diam = da.dia;
    }
    else if (da.valor < menor) {
        menor = da.valor;
        dian = da.dia;
    }
    cont++
}

console.log(`Menor Faturamento $:${menor} no dia :${dian}`);
console.log(`Maior Faturamento $:${maior} no dia :${diam}`);
console.log(`Quantidade de Vezes que a venda Diaria foi maior que a Mensal:${contm} Vezes Valor Media Mensal$:${novo / dados.length}`);

//QUESTÃO 4
/*
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

*/

//QUESTÃO 5
/*
let inverte = (nome) => {
    let string = '';
    for (let i = nome.length - 1; i >= 0; i--) {
        string += nome[i];
    }
    return string;
}

console.log(inverte('ola'));

*/
