//Questão 10: Bubble Sort
//Implemente o algoritmo Bubble Sort em uma função chamada bubbleSort que recebe um array de números inteiros. A função deve ordenar o array em ordem crescente e retorná-lo.

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1 ; i++) {
        for (let j = 0; j < array.length - 1 - i; j++){
            if (array[j]>array[j+1]) {
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            };
        };
    };
    return array;
};

const numerosAleatorios = [42, 7, 83, 19, 55, 90, 2, 34, 71, 26];
console.log(bubbleSort(numerosAleatorios));