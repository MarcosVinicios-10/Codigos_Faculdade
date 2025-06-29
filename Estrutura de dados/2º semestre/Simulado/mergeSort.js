function mergeSort (arr){

    // Se tiver 1 ou 0 elementos ele já está ordenado
    if (arr.length < 2){
        console.log('O Array já está ordenado:');
        return arr;
    };

    //Encontre o meio do array
    const meio = Math.floor((arr.length/2));
    
    //Divide o array em duas partes
    const primeiraParte = arr.slice(0,meio);
    const segundaParte = arr.slice(meio);

    //Chamada recursiva ordenar as duas metades
    return merge(mergeSort(primeiraParte),mergeSort(segundaParte));

};

function merge(primeiraParte,segundaParte){
    let resultado = [];
    let i=0,j=0;

    //Enquanto houver elementos em ambos os arrays

    while(i<primeiraParte.length && j<segundaParte.length){
        if (primeiraParte[i]<segundaParte[j]){
            resultado.push(primeiraParte[i]);
            i++;
        }else{
            resultado.push(segundaParte[j]);
            j++;
        };
    };

    //Juntar os elementos restantes (se houver)
    return resultado.concat(primeiraParte.slice(i)).concat(segundaParte.slice(j));
};

let numbers = [38,27,43,3,9,82,10];
let númerosOrdenados = mergeSort(numbers);
console.log(númerosOrdenados);

