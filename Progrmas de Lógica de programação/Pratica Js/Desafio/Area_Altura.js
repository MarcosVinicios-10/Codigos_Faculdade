function mostra(mostra){
    document.write(mostra)
}
function PulaLinha(){
    document.write('<br>')
}

var largura = parseInt(prompt('Qual a altura?'));
var comprimento = parseInt(prompt('Qual o comprimento?'))

var perimetro = 2 + (largura+comprimento)
var area= largura*comprimento

mostra('O perímetro é ' + perimetro)
PulaLinha()
mostra('A área é ' + area)