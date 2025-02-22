function estação(mês) {
	if (mês<3||mês==12) {
		console.log('É verão!')
	}
	else if (mês < 6){
		console.log('É outono!')
	}
	else if (mês < 9) {
		console.log('É inverno!')
	}
	else {
		console.log('É primevera!')
	}
}

estação(10)