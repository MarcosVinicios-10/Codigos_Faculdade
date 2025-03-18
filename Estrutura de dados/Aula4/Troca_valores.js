// Minha solução para a reversão de listas.

function reverter(x){
    var lista_temp = []
    for (i=x.length-1;i>=0;i--){
        lista_temp.push(x[i])
    }
    return lista_temp
}

var lista = [1,2,3,4,5,6,7,8,9,10]

lista_reversa = reverter(lista)
console.log(lista_reversa)