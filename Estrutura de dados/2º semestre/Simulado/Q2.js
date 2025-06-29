//Questão 2: Laços de Repetição
//Crie uma função chamada somarNumerosPares que recebe um número inteiro
//Limite como parâmetro. A função deve retornar a soma de todos os números pares de 1 até limite (inclusive).

function somarNumerosPares(numero) {
    let soma = 0;
    for (let i=0; i<= numero;i++){
        if (i%2==0){
            soma += i;
        };
        
    };

    return soma;
};

const numero = 10;
console.log(somarNumerosPares(numero));