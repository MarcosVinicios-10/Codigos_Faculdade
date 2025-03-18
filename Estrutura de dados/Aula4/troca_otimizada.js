function troca(lista,p1,p2){
    [lista[p1],lista[p2]] = [lista[p2],lista[p1]];
    return lista;
}

var lista = [8,3];
troca(lista,0,1);
console.log(lista);