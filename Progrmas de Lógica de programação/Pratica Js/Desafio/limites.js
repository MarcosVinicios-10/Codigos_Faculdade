function mostra(mostra){
    document.write(mostra)
}
function PulaLinha(){
    document.write('<br>')
}

var limiteInferior = parseInt(prompt('Qual o limite inferior?'))
var limiteSuperior = parseInt(prompt('Qual o limite superior?'))
var numero = parseInt(prompt('Qual o número?'))
var x = limiteInferior

for (let i = 1; i < limiteSuperior; i++) {
    var x = x + 1;
    if (x==numero){
        mostra('Está dentro do intervalo.')
        break;
    } else if (x==limiteSuperior){
        mostra('Está fora do intervalo.')     
        break;
    }
}