function AvaliadorNotas(nota){
	switch (nota){
	case nota >= 90:
		console.log('Sua nota é um A.')
		break
	case nota >= 80:
		console.log('Sua nota é um B.')
	    break
	case nota >= 70:
		console.log('Sua nota é um C.')
	    break
	case nota >= 60:
		console.log('Sua nota é um D.')
	    break
	default: nota <= 60:
		console.log('Sua nota é um F.')
		break
	}
}

AvaliadorNotas()