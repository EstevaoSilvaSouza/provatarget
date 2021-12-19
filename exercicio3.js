//QUESTÃO 3

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
