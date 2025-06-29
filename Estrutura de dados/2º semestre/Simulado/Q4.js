//Questão 4: Arrays
//Crie uma função chamada encontrarMaiorNumero que recebe um array de números inteiros como parâmetro. 
// A função deve retornar o maior número presente no array. Se o array estiver vazio, retorne undefined.

function encontrarMaiorNumero(array) {
    if (array.length == 0) {
        return undefined;
    };
    let maior = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
         maior = array[i];
        };
    };
    return maior;
};

const numeros = [1,2,3,4,5,6,9,7,8,4,5,31,1,3,6,8,9,8,5,5,6,2,3];
console.log(encontrarMaiorNumero(numeros));