//QUESTÃO NUMERO 2

let i;
let fibo = [];

fibo[0] = 0;
fibo[1] = 1;

for (i = 2; i <= 10; i++) {
    //Formula >> Fn = (Fn - 2) + (Fn - 1)
    fibo[i] = fibo[i - 2] + fibo[i - 1];
    console.log(fibo[i]);
}