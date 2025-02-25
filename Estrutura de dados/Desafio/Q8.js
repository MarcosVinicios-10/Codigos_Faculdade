var palavras = ['amigo','banana','abacate','laranja','açai'];

var palavras_A = palavras.filter(function(x){
    return x.startsWith('a')
});

console.log(palavras_A);