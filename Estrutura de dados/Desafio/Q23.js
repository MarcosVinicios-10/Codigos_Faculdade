let palavras = ['carro','sol','bicicleta','chave','janela'];

var maior_5 = palavras.filter(function(x){
	return x.length > 5
})

console.log(maior_5)