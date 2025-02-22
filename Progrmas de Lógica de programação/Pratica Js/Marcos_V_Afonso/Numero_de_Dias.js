console.log('oi')
function determinadorDias(mes){
	switch (mes){
	case 2:
		console.log('28 ou 29 dias.');
	    break
	case 4:
	case 6:
	case 9:
	case 11:
	    console.log('30 dias')
	    break
	default:
	  console.log('31 dias')    	
		
	}
}
determinadorDias(6)