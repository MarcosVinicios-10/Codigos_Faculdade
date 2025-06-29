//Questão 12: Insertion Sort
//Implemente o algoritmo Insertion Sort em uma função chamada insertionSort que recebe um array de números inteiros. A função deve ordenar o array em ordem crescente e retorná-lo]

function insertsort(array) {
    for (let i = 1; i < array.length; i++) {
        
        let j = i;
        
        while(j>0 && array[j]<array[j-1]){
            [array[j-1],array[j]]=[array[j],array[j-1]];
            j -= 1;
        };
    };
    return array;
};

const valores = [2,1,5,4,6,78,1,9,10,0];
console.log(insertsort(valores));