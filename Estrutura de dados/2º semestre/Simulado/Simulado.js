//Questão 1: Estrutura de Seleção
//Crie uma função chamada verificarIdade que recebe um número inteiro idade como parâmetro. A função deve retornar: - "Jovem' se a idade for menor ou igual a 30.
//'Adulto' se a idade for maior que 30 e menor ou igual a 60, -'Idoso' se a idade for maior que 60.
// Seu código aqui
function verificaIdade(numeroInteiro){
	if(numeroInteiro <=30){
		console.log("jovem");
	}else if(numeroInteiro >=31 && numeroInteiro <= 60){
		console.log("adulto");
	}else if(numeroInteiro >=61){
		console.log("idoso");
	}else{
		console.log("insira valor inteiro valido")
	}
}

let idade = 60;
verificaIdade(idade)

//Questão 2: Laços de Repetição
//Crie uma função chamada somarNumerosPares que recebe um número inteiro
//Limite como parâmetro. A função deve retornar a soma de todos os números pares de 1 até limite (inclusive).
// Seu código aqui
function somarNumerosPares(x){
	let soma = 0
	for(let i =0; i <= x; i+=2){
		soma = soma + i;
	}
	console.log(soma)
}

const fuckthis = 10;
somarNumerosPares(fuckthis);

//Questão 3: Funções
//Crie uma função chamada calcularAreaRetangulo que recebe dois parâmetros: largura e altura. A função deve retornar a área do retângulo. Se qualquer um dos parâmetros não for um número positivo, a função deve retomar a string 'Entrada inválida.
// Seu código aqui
function calcularAreaRetangulo(l,a){
	let area = a*l
	return area
}
const altura = 10;
const largura = 5;

const uaufodase = calcularAreaRetangulo(largura, altura);
console.log(uaufodase)

//Questão 4: Arrays
//Crie uma função chamada encontrarMaiorNumero que recebe um array de números inteiros como parâmetro. A função deve retornar o maior número presente no array. Se o array estiver vazio, retorne undefined.
// Seu código aqui
function encontrarMaiorNumero(x){
	let i = x[0];
	for(let j = 1; j< x.length; j++){
		if(x[j] > i){
			i= x[j]
	
		}
	}
	return i;
}

const arrayfds = [5,2,1,6,10]
const maior = encontrarMaiorNumero(arrayfds);
console.log(maior)
//Questão 5: Objetos
//Crie uma função chamada criarPessoa que recebe nome, idade e cidade como parâmetros. A função deve retornar um objeto com essas propriedades. Adicione também um método apresentar a este objeto que retome uma string no formato:
//"Olá, meu nome é [nome], tenho [idade] anos e moro em (cidade]."
// Seu código aqui

function criarPessoa(nome, idade, cidade) {
  return {
    nome: nome,
    idade: idade,
    cidade: cidade,
    apresentar: function() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`;
    }
  };
}
const meuNome = 'Abautucan'
const minhaIdade = 23;
const minhaCidade = "forroca"
const obibeto = criarPessoa(meuNome,minhaIdade, minhaCidade);
console.log(obibeto)
console.log(obibeto.apresentar())

//Questão 6: Manipulação de Arrays
//Crie uma função chamada filtrarPalavrasLongas que recebe um array de strings palavras eum número inteiro tamanhoMinimo como parâmetros. A função deve retornar um novo array contendo apenas as palavras de palavras que possuem um comprimento maior ou igual a tamanhoMinimo.
// Seu código aqui

function filtrarPalavrasLongas(x,y){
	let meSoloHer = [];
	for(let i=0; i<x.length; i++){
		if(x[i].length >= y){
			meSoloHer.push(x[i]);
		}
	}
	return meSoloHer;
}
const lista= ["varandinha", "varanda", "festa na varanda", "oi", "lol","lul","omegalol", "ai","ui","1234"]
const tamanhoMin= 5;
const novoarray = filtrarPalavrasLongas(lista, tamanhoMin);
console.log(novoarray);

//Questão 7: Operadores Condicionais
//Crie uma função chamada statusAluno que recebe dois parâmetros: nota (número) e frequencia (número, em porcentagem). A função deve retornar: - 'Aprovado' se a nota for maior ou igual a 7 e a frequência for maior ou igual a 75. - 'Recuperação' se a nota for maior ou igual a 5 e menor que 7, e a frequência for maior ou igual a 75. -
//'Reprovado' em todos os outros casos.
// Seu código aqui
function statusAluno(nota, frequencia){
	let notaMin =7;
	let freqMin = 75;
	if(nota >=notaMin && frequencia >= freqMin){
		console.log("aprovado")
	}else if( nota >= 5 && nota < notaMin && frequencia >= freqMin){
		console.log("recuperação")
	}else{
		console.log("reprovado");
	}
}
const notaAluno = 7;
const frequenciaAluno = 7.5*100
statusAluno(notaAluno,frequenciaAluno);
//Questão 8: Métodos
//Crie um objeto chamado calculadora com os seguintes métodos: - somar (a, b) :
//retorna a soma de a e b.- subtrair(a, b): retoma a subtração de a e b.-multiplicar (a, b): retoma a multiplicação de a e b.- dividir(a, b): retorna a divisão de a por b. Se b for 0, deve retornar a string 'Divisão por zero não é permitida'.
// Seu código aqui
function calculadora(a, b) {
  return {
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    divisao: b === 0 ? 'Divisão por zero não é permitida' : a / b
  };
}

const valor1 = 4;
const valor2 = 5;
console.log(calculadora(valor1, valor2));


//Nível Avançado
//Questão 9: Sort (método)
//Crie uma função chamada ordenarProdutos que recebe um array de objetos produtos. Cada objcto produto possui as propridades nome (string) e preco (número). A função deve retornar um novo array de produtos ordenados em ordem crescente de preco. Se dois produtos tiverem o mesmo preço, eles devem ser ordenados em ordem alfabética crescente pelo nome .
// Seu código aqui
function ordenarProdutos(x){
	const arrumado = x.sort((a,b)=>{
    	if (a.valor === b.valor) {
    	return a.nome.localeCompare(b.nome); // ordem alfabética. O método .localeCompare() é uma função de string em JavaScript usada para comparar duas strings com base em regras específicas de idioma e ordenação alfabética.
    	}
   		return a.valor - b.valor; // ordem crescente de valor
  	});
  return arrumado;
}

const produtos =[
	{nome:"oi", valor: 2},
	{nome:"ui", valor: 3},
	{nome:"ii", valor: 5},
	{nome:"ai", valor: 2}
];
console.log(ordenarProdutos(produtos))
//Questão 10: Bubble Sort
//Implemente o algoritmo Bubble Sort em uma função chamada bubbleort que recebe um array de números inteiros. A função deve ordenar o array em ordem crescente e retorná-lo.
// Seu código aqui
function bubu(varandinha){
	for(let meme = 0; meme < varandinha.length; meme++){
		for(let noggers = 0; noggers < varandinha.length-meme; noggers++){
			if(varandinha[noggers] > varandinha[noggers +1]){
				[varandinha[noggers], varandinha[noggers+1]] = [varandinha[noggers+1], varandinha[noggers]]
			}
		}
	}
	return varandinha
}
const numerosFodas= [1,5,7,8,9,2]
console.log(bubu(numerosFodas))


//Questão 11: Selection Sort
//Implemente o algoritmo Selection Sort em uma função chamada selectionSort que recebe um array de números inteiros. A função deve ordenar o array em ordem crescente e retorná-lo.
// Seu código aqui
function selectionSort(x){
	for (let i=0; i< x.length; i++){
		let menor = i;
		for(let j= i+1; j< x.length; j++){
			if(x[j] < x[menor]){
				menor =j;
			} 
		}
		[x[i], x[menor]] = [x[menor], x[i]];
	}
	return x;

}
const ex=[-3,1,-5,2,0];
console.log(selectionSort(ex))


//Questão 12: Insertion Sort
//Implemente o algoritmo Insertion Sort em uma função chamada insertionSort que recebe um array de números inteiros. A função deve ordenar o array em ordem crescente e retorná-lo]
function insertsort(x){
	for (let j = 1; j <x.length; j++){
		let atual = x[j];
		let i = j-1;
		while( i >= 0 && x[i] > atual){
		x[i +1] = x[i];
		i--;
		}
	x[i + 1]=atual
	}
	return x
}
const seila = [1,2,4,3,5];
console.log(insertsort(seila))