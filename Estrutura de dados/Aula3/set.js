let valorunico = new Set();
valorunico.add(23);
valorunico.add(23);
console.log(valorunico);
valorunico.add(25);
valorunico.add(89);
valorunico.add(21);
console.log(valorunico);

// Tem?
console.log(valorunico.has(89))

// Retirar
valorunico.delete(89)
console.log(valorunico)

// Tamanho

console.log(valorunico.size)

//Apagar tudo

valorunico.clear()
console.log(valorunico)