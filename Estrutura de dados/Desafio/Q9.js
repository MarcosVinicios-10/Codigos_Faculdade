var pessoas = [{nome: 'João',idade:25,cidade:'São Paulo'},
               {nome: 'maria',idade:30,cidade:'Rio de Janeiro'},
               {nome: 'Pedro',idade:20,cidade:'São Paulo'}
]
var pessoas2 = pessoas.filter(function(x){
    return x.nome == 'João'
})
console.log(pessoas2)