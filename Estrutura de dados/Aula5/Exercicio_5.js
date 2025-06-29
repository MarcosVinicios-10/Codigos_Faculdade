const dobrados = (array) => {
    lista_auxiliar = []
    for (var i in array){
        lista_auxiliar.push(array[i]*2)
    }
    return lista_auxiliar
};

const numeros = [1,2,3,4,5];

dobro = dobrados(numeros)
console.log(dobro)