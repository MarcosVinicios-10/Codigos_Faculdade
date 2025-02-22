// Potência usando um laço for

var base = parseInt(prompt('Digite a base:')); // pergunta a base;
var expoente = parseInt(prompt('Digite o expoente:')); // Pergunta o expoente;
var baseOriginal = base; // Aqui é uma forma de salvar o valor da base, visto a variável base irá mudar ao longo do código.
for (let  i = 1; i < expoente; i++) { 
    var potencia = (baseOriginal * base) // Aqui eu digo que potência é igual baseOriginal.base, o valor de base original não mudara, já a base sim,  pois priciso multiplicar o resultado da ultima multiplicação pelo valor original da base
    base = potencia; // Aqui eu atualizo o valor de base, dizendo que é igual ao da última multiplicação.
}
document.write(potencia)

// neste caso i é um contador e começa valendo 1, pois esse laço rodara uma vez idenpendente da limitação, logo colo 1 para ele já conta 1 repetição. Este laço irá rodar até que i seja menor que o expoente.
// No caso de uma potência de 2³, podemos dizer que ela é (2.2.2), logo na primeira vez que o código rodar ele já fora duas multiplações, assim ele volta, atualiza i=2 w faz mais uma vez, assima finalizando a potência.
// Ele atualiza i=3 e encerra o laço. Neste caso da potenciação não preciso dizer que i <= expoente, dessa forma faria uma multiplicação a mais. Talvez se i=0 no inicio daria certo.