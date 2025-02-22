// calculadora simples

alert('Olá! Vamos fazer algumas operações aritiméticas!');
alert('Primeiro selicione a operação que deseja realizar:');

var x = 1; // Apenas para inciar o While
var y = 0;
var SalvaResultado = 0;

while(x >= 1) {
  var x = prompt('Digite 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão. Digite 0 para sair.'); // pergunta ao usuário a operação que deseja fazer

  if(x == 0){  //Encerra o While caso o usuário digite 0 no prompt anterior.
    break;
  }

  if(SalvaResultado == 0){ //Caso o usuário digite 0 no último prompt, informando que não deseja salvar o resultado, ele pergunta dois novos números p/ realizar uma nova operação.
  var num1 = parseInt(prompt('Certo, agora digite o primeiro número:'));
  var num2 = parseInt(prompt('Ok, agora digite o segundo número:'));
  }
  else{ //Caso o usuário digite 1, ele salva o resultado da ultima conta e pergunta apenas um no número.
    var num1 = parseInt(prompt('Certo, agora digite o número:'));
  }

  if(x == 1) { // Caso o usuário escolha 1 com opção, ele inicial a soma. Assim como nas seguintes.
    if(SalvaResultado == 0){ //Caso o usuário escolha não salvar o resultado de sua última operação, o programa irá utilizar os dois números informados. Assim como nas seguintes.
    var v = (num1 + num2);
    }
    else{
      var v = num1 + y; // Se o usuário decidir salvar o ultimo resultado, o programa salva este valor na váriavel y e o soma com o novo número informado. Assim como nos seguintes.
    }
    alert(v); // Mostra o resultado. v sempre vai possui o resultado.
  }

  if(x == 2){
      if(SalvaResultado == 0){
      var v = (num1 - num2);
      }
      else{
        var v = y - num1;
      }
      alert(v);
  }

  if(x == 3){
    if(SalvaResultado == 0){
      var v = (num1 * num2);
    }
    else{
      var v = y * num1;
    }
      alert(v);
  }

  if(x == 4){
    if(SalvaResultado == 0){
      var v = (num1 / num2);
    }
    else{
      var v = (y / num1);
    }
     alert(v);
  }

  var SalvaResultado = parseInt(prompt('Deseja salvar resultado? Digite 1 para sim e 0 para não')); //Aqui ele o programa pergunta se deseja salvar o resultado.
  if(SalvaResultado == 1){ // Caso você deseje salvar:
    y = 0; //Primeiro ele iguala y a 0, pois não queremos o resultado de um outra conta influenciando. Caso não fizermos isso ele somara o resultado da ultima conta com o novo, ao invés de apenas adicionar a y.
    y = parseInt(y + v); // Aqui ele diz que y(0) é igual a y + v, onde v possui o resultado da última operação em qualquer uma das operações.
  }
}