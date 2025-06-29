var numeros = []
for (i= 1; i<6;i++){
    numero = parseInt(prompt('Insira uma nota: '))
    numeros.push(numero)
}
var x = 0
for (i=0;i<numeros.length;i++){
    x = x + numeros[i]
} 
média = x/5
console.log(média)
