console.log("Olá pessoa!")

function médiafinal(média) {
  if (média >= 7) {
  	console.log("Você foi aprovado!")
  }
  else if (média < 5) {
  	console.log('Você foi reprovado.')
  }
  else {
    console.log('Você está de recuperação.')
  }
}
var média = 7
médiafinal(média)
