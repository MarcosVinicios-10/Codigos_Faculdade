function PreçoTotal(estoque){
    preço = 0;
    for (i=0;i<estoque.length;i++){
        preço = preço + (estoque[i].preco*estoque[i].quantidade);
    };
    return preço;
};

const estoque = [
 { produto: "Camiseta", preco: 25, quantidade: 10 },
 { produto: "Calça", preco: 80, quantidade: 5 },
 { produto: "Tênis", preco: 120, quantidade: 8 }
];

console.log(PreçoTotal(estoque));