function AvaliadorNotas(nota){
	if (nota >= 90) {
		console.log('Sua nota é um A.')
	}
	else if (nota >=80) {
		console.log('Sua nota é um B.')
	}
	else if (nota >= 70) {
		console.log('Sua nota é um C.')
	}
	else if (nota >= 60) {
		console.log('Sua nota é um D.')
	}
	else {
		console.log('Sua nota é um F.')
	}
}

AvaliadorNotas(45)