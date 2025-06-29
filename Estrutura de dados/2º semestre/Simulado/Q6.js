//Questão 6: Manipulação de Arrays
//Crie uma função chamada filtrarPalavrasLongas que recebe um array de strings palavras eum número inteiro tamanhoMinimo como parâmetros. 
// A função deve retornar um novo array contendo apenas as palavras de palavras que possuem um comprimento maior ou igual a tamanhoMinimo.

function filtrarPalavrasLongas(array,tamanhoMinimo) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].length >= tamanhoMinimo){
            temp.push(array[i]);
        };
    };
    return temp;
};

const nomes = ['cebola','aizen','uva','goiás','Nova York','japão','banana','manga'];
console.log(filtrarPalavrasLongas(nomes,6));