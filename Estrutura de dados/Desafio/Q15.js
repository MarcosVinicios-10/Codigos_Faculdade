let pessoas = [
    {nome: 'João',idade:25},
    {nome: 'maria',idade:30},
    {nome: 'Pedro',idade:20},
    {nome: 'Ana',idade:35}
]

var idade_30 = pessoas.filter(function(x){
    return x.idade > 30
});

console.log(idade_30)