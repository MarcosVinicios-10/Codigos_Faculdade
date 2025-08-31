var números = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
console.log(números[números.length-1]); //último
console.log(números.length)
var n = [números[24],números[38],números[41]];
console.log(n)

// Mostrando itens do Array e seus indices

números.forEach(function(item,indice,array){
    console.log(item,indice);
})

// Adicionando itens ao Array

números.push(51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70)
console.log(números)

// Removendo os ultimos 5 itens da lista

for(let i = 1; i < 6; i++){
    números.pop();
}

// Removendo os primeiros 3 itens da lista

for(let i = 1; i < 4; i++){
    números.shift();
}
console.log(números)

// Interpolação

const nome = "Marcos";
const idade = 20;
const moto = "CG 160 Fan";

console.log(`Olá! meu nome é ${nome} tenho ${idade} anos e minha moto é uma ${moto}.`)

números.forEach(function(item,indice){
    console.log(`Índice: ${indice}--Item: ${item}`);
})




