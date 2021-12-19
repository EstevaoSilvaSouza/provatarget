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

//QUESTÃO 3 NaN

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
    console.log(` Porcentagem de ${dados.est} = ${(dados.n / total) * 100}`)

}
console.log(`Valor Total: ${total}`);

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
