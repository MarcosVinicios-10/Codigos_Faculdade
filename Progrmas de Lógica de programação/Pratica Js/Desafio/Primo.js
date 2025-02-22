// primo

x = 2  // Aqui iniciamos a variável que iremos usar para divir o número para saber seé primo. Começamos por 2, pois por 1 já sabemos que ele é divisivel.
y = 0 // Apenas para iniciar o while.
var numero = parseInt(prompt('Digite o número que deseja saber se é primo:'))

while(y <= numero){ // Aqui não importa muito, pois apenas ultilizaremos para iniciar o while, iremos parar com o break.

    var divisao = (numero % x); // Calculamos o resto da divisão, por exemplo: 5%2=1

    if(numero == 2){ // Se o número for 2, já dizemos que ele é primo, pois neste código não conseguimos calcular ele, logo uma limitação do programa.
        alert(numero + ' é primo!');
        break;
    }else if(numero <= 1){ // Se o número for 0 ou 1 dizemos que não é primo. 
        alert(numero + ' não é primo.'); 
        break;
    }

    if(divisao == 0){ // Vamos calcular o resto da divisão como números entre 1 e o número digitado pelo usuário, caso um desses calculos seja = 0, dizemos que ele não é primo, pois só sera primo caso for divisivel por ele mesmo por 1.
        alert(numero + ' não é primo.'); 
        break;
    }
    x = x + 1; // Aqui vamos aumentando o valor de x para dividirmos, note que ele está antes do último if, isso por que caso ele estivesse depois, 
               // o programa iria dividir o número por ele mesmo, sendo assim o resto seri 0 e o programa diria que ele não é primo.

    if(x == numero){ // Caso x chegue ser igual ao número, siginifica que não achamos restos = 0.
        alert(numero + ' é primo!')
        break;
    }
    
}

