// Arrays

var numeros = [1,2,3,4,5,6,7,8,9,10];
var nomes = ['Uva','Manga','Banana','Laranja','Ameixa','Limão']

// Adicionar
numeros.push(1);
numeros.unshift(10);
console.log(numeros);
console.log('\n');


// Retirar
numeros.pop();
numeros.shift();
console.log(numeros);
console.log('\n');

// Retirar e adicionar
numeros.splice(5,0,5.5,5.9);
console.log(numeros);
numeros.splice(5,2)
console.log(numeros)
console.log('\n');

// Ordenar
nomes.sort();
console.log(nomes);
console.log('\n');

// Ordenar crescente e decrescente
nomes.sort(function (A,B){
    return A-B
});

numeros.sort(function (A,B){
    return B - A
});
console.log(numeros);
console.log(nomes);
console.log('\n');

// Começa com determianda letra 
console.log(nomes[0].startsWith('B'));
console.log(nomes[5].startsWith('U'));
console.log('\n');

// Interpolação
console.log(`Vitamina de ${nomes[1]} com ${nomes[3]} não combina.`);
console.log('\n');

// Concatenar
var numeros_nomes = nomes.concat(numeros);
console.log(numeros_nomes);
console.log('\n');

// Filter
var par = numeros.filter(function (n){return n%2 == 0});
var impar = numeros.filter(n => {return n%2 != 0});
console.log(par);
console.log(impar);
console.log('\n');

// Reverse
numeros.reverse();
console.log(numeros);
console.log('\n');

// Arrow Functions
const dorar = (x) => {return x*2};
console.log(dorar(10));

