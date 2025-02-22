alert('Olá! Vamos calcular a média de 2 números!'); //Um alert para mostrar uma mensagem para o usuário sobre o que se trata o programa.

var num1 = parseInt(prompt('Qual o primeiro número?')); //Aqui perguntamos ao usuário qual o 1° número.
var num2 = parseInt(prompt('Qual o segundo número?')); //Aqui a mesma coisa, mas para o segundo número.
var media = (num1+num2)/2; //Aqui calculamos a média. Note que a soma está entre parênteses, pois pricisamos fazer a soma primeiro e depois a divisão. Salvamos a média em vriável para caso sejá necessário utilizar novamente.
alert('A média é: ' + media); //Aqui usuamos o alert para informar o resultado.