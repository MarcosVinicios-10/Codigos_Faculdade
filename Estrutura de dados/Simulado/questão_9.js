const palavras = ["banana", "abacate", "uva", "amora", "acerola", "abóbora"];
var frutasA = palavras.filter(function (palavras){for (x in palavras){return palavras.startsWith('a') }})

console.log(frutasA)