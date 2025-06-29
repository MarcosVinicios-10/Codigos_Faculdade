//Questão 8: Métodos
//Crie um objeto chamado calculadora com os seguintes métodos: - somar (a, b) :
//retorna a soma de a e b.- subtrair(a, b): retoma a subtração de a e b.-multiplicar (a, b): retoma a multiplicação de a e b.- dividir(a, b): retorna a divisão de a por b. Se b for 0, 
//deve retornar a string 'Divisão por zero não é permitida'.

var calculadora = {
    somar: function (a,b) {return a+b;},
    subtrair: function (a,b) {return a-b;},
    multiplicar: function (a,b) {return a*b;},
    dividir: function (a,b) {if(b==0){return 'Divisão por zero não é permitida.'};return a/b;},
};

const a = 5;
const b = 10;
const c = 0;
console.log(calculadora.somar(a,b));
console.log(calculadora.subtrair(a,b));
console.log(calculadora.multiplicar(a,b));
console.log(calculadora.dividir(a,b));
console.log(calculadora.dividir(a,c));