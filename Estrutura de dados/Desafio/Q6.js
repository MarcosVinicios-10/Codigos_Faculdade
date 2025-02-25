var números = [1,2,3,4,5,6];

var pares = números.filter(function(x){
    return x%2 == 0
});

console.log(pares);