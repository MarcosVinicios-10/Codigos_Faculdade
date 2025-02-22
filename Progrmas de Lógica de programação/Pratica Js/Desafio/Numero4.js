// Programa que mostre os números entre dois números informados pelo usuário.

function mostra(frase){
    document.write(frase);
}

function PulaLinha(){
    document.write('<br>');
}

var A = parseInt(prompt('Digite o número para começar o intervalo:')); 
var B = parseInt(prompt('Agora digite o número para fecharmos o intervalo:'));
var min = A

for (let i = 1; i <= B; i++){ //Aqui usamos um laço for para fazermos essa operação, a cada vez que passa ele soma 1 ao menor valor. Não usamos i para parar o programa, pois quantas vezes precisamos somar varia.
    var A = min + i; // Aqui pegamos o valor minimo e somamos 1, assim mostramos os valores entreos números propostos pelo usuário.
    mostra(A); // Mostra na tela
    PulaLinha(); // Pula linha :)
    if(A == (B - 1)){ // Aqui é onde paramos, quando A foi igual ao valor máximo(B) - 1 encerramos, pois não podemos mostrar o maior valor. Não achei uma forma de parar com i. 
        break;        // Visto que quantas vezes precisamos somar varia de acordo com o intervalo, se usarmos for para parar ele geralmente para bem além.
    }
}