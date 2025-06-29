//Questão 11: Selection Sort
//Implemente o algoritmo Selection Sort em uma função chamada selectionSort que recebe um array de números inteiros. 
//A função deve ordenar o array em ordem crescente e retorná-lo

function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let menor = i;

        for (let j = i+1; j < array.length; j++) {
            if (array[j]<array[menor]) {
              menor = j;  
            };
        };  
        
        [array[i],array[menor]] = [array[menor],array[i]];
    };

    return array;
};

const numbers = [7,1,3,10,5,6,9,4,2,0,8];
console.log(selectionSort(numbers));