let palavras = ['elefante','casa','sol','computador','chaves'];

var ordem = palavras.sort(function(a,b){
    return a.length-b.length
})

console.log(ordem)