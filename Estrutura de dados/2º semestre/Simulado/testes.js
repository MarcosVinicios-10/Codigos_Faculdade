function insertionSort(array) {
    for (let i = 1; i<array.length;i++){
        let j = i;
        while (j>0 && array[j]<array[j-1]){
            [array[j-1],array[j]] = [array[j],array[j-1]];
            j -=1;
        };
    };
    return array;
};

const numeros = [1,3,5,6,4,8,9,0,1,0,3,4,7,-1];
console.log(insertionSort(numeros));