let números = [23,5,89,12,44];

números_crescente = [...números].sort(function(a,b){
    return a -b 
})

números_decrescente = números.sort(function(a,b){
    return b - a 
})

console.log(números_crescente)
console.log(números_decrescente)