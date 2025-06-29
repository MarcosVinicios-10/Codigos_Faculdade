const somar = (array) => {
    let temp = 0
    for  (x in array){
        temp = temp + array[x].PRECO
    }
    return temp
};

const PRODUTOS= [ { NOME: "PRODUTO1", PRECO: 10.99 }, { NOME: "PRODUTO2", PRECO: 5.99 }, { NOME: "PRODUTO3", PRECO: 7.99 }];

console.log(somar(PRODUTOS));
