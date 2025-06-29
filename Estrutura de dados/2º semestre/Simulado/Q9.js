//Nível Avançado
//Questão 9: Sort (método)
//Crie uma função chamada ordenarProdutos que recebe um array de objetos produtos. Cada objeto produto possui as propridades nome (string) e preco (número). 
//A função deve retornar um novo array de produtos ordenados em ordem crescente de preco. Se dois produtos tiverem o mesmo preço, eles devem ser ordenados em 
// ordem alfabética crescente pelo nome.

function ordenarProdutos(array) {
    let temp = array.sort(function(a,b){
            if(a.preço!=b.preço){
            return a.preço - b.preço;
        }else{
            return a.produto.localeCompare(b.produto);
        };
        });
    return temp;
};

const produtos = [
    { produto: 'Camisa', preço: 50.00 },
    { produto: 'Calça', preço: 80.00 },
    { produto: 'Tênis', preço: 10.00 },
    { produto: 'Óculos de Sol', preço: 180.00 },
    { produto: 'Grampeador', preço: 180.00 },
    { produto: 'Relógio', preço: 20.00 },
    { produto: 'Caneta', preço: 180.00 }
];

console.log(ordenarProdutos(produtos));
