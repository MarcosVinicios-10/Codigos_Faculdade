function mostra(mostra){
    document.write(mostra)
}

function PulaLinha() {
    document.write('<br>')
}

var capital = parseInt(prompt('Capital inicial:'))
var juros = parseInt(prompt('Taxa de juros:'))
var tempo = parseInt(prompt('Tempo do invesdtimento em meses:'))
juros = juros/100
var montante = ((capital * ((1+juros)*(1+juros))))

mostra('O montante será de R$' + montante.toFixed(2))