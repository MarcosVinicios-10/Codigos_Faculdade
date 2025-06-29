// Set só recebe valores unicos


// Set
var numeros = new Set();

// Adicionar
numeros.add(12);
numeros.add(12);
numeros.add(6);
numeros.add(10)
console.log(numeros);
console.log('\n');

// Retirar 

numeros.delete(12);
console.log(numeros);
console.log('\n');

// Verificar se tem

console.log(numeros.has(6));
console.log(numeros.has(8));
console.log('\n');

// Tamanho
console.log(numeros.size);
console.log('\n');

// Limpar tudo

numeros.clear();
console.log(numeros);
console.log('\n');


