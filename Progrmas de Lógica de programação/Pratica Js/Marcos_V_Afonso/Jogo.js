let escolhaUsuario = "pedra"
let escolhaComputador
let resultado
do{
	let aleatorio=Math.floor(Math.round()*3); // gerei o nr aleatorio de 0 a 2
	switch (aleatorio){
	case 0: // caso seja 0
		escolhaComputador="pedra";
		break;
	case 1:
		escolhaComputador="papel";
		break;
	default: // e oque sobra, resto
		escolhaComputador="tesoura";
	}
	if ((escolhaUsuario==="pedra" && escolhaComputador === "tesoura") 
		||(escolhaUsuario==="papel" && escolhaComputador==="pedra") 
		|| (escolhaUsuario==="tesoura" && escolhaComputador==="papel")){
			resultado="Usuario venceu!"
		}
		else if (escolhaUsuario===escolhaComputador){
			resultado="empate!"
		}
		else{
			resultado="Computador Venceu!"
		}
		console.log("Usuario: " +escolhaUsuario+ "-Computador: " + escolhaComputador+ "-Resultado: "+resultado);
}while(resultado==="empate!")
