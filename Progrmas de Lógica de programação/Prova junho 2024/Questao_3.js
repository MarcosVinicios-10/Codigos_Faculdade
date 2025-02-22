function mostra(mostra) {
    document.write(mostra);
}
function PulaLinha(){
    document.write('<br>');
}

function números(i) {
	for (var i = 1 ; i <= 99; i = i + 2) {
        mostra(i);
        PulaLinha();
    }	
}

números(1)