const somaArray = (array) => {

    x = 0
    for (i=0; i<array.length; i++){
        x = x + array[i]
    }
    return x
}

var numeros = [1,2,3,4,5,6,7,8,9,10];

console.log(somaArray(numeros));

//reduce