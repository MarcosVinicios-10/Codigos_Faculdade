let numero = 5;
fatorial = 1;
for (let i = 1; i <= numero; i++) {
	fatorial = fatorial * i;
}
console.log(`O fatorial de ${numero} é ${fatorial}`);

//Soma dos quadrados dos 10 primeiros números naturais

let numeroQuadrado = 0;
for(let i = 1; i <= 10; i++){
	numeroQuadrado = numeroQuadrado + (i*i);
}
console.log(`A soma dos quadrados do 10 primeiros números naturais é: ${numeroQuadrado}`);

//fibonacci com Whille

console.log('Os 10 primeiros digitos da sequência de Fibonacci é:')
primeironumero = 1;
segundonumero = 1;
console.log(primeironumero);
console.log(segundonumero);
i = 3;
while(i<=10){
   let proximoNumero = primeironumero + segundonumero;
   console.log(proximoNumero);
   primeironumero = segundonumero;
   segundonumero = proximoNumero;
   i = i + 1;
}
