//QUESTÃO 5

let inverte = (nome) => {
    let string = '';
    for (let i = nome.length - 1; i >= 0; i--) {
        string += nome[i];
    }
    return string;
}

console.log(inverte('ola'));


