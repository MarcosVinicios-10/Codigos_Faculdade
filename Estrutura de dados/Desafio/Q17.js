function remover(array,Índice){
    array.splice(Índice,3)
    return array
};

var cores1 = ['vermelho','azul','amarelo','verde', 'roxo','laranja'];

var cores_modificada = remover(cores1,0);
console.log(cores_modificada);