// Adicionando itens no inicios do Array

var carros = ['Uno','Maverick','Corsa'];
carros.unshift('Opala','Chevette','Landau','Marea');
console.log(carros);

// Removendo itens em posições especificas 

carros.splice(1,2); // posição e quantidade de itens a serem removidos.
console.log(carros);

// Também é possível remover e adicionar itens ou simplismente adicionar

carros.splice(1,2,'Palio','Focus'); // Removido dois itens do Array e adicionado dois apartir da posição 1
console.log(carros);

carros.splice(1,0,'Chevette','Landau','Marea','Uno'); // Adicionar os itens apartir da posi. 1 e não remover nada
console.log(carros);

// Ordenar um Array

carros.sort()
console.log(carros)


// Função de comparação: A função de comparação é uma função que define a ordem dos elementos. 
// Ela recebe dois parâmetros, a e b, que são os elementos a serem comparados. Se a função de comparação retornar:- 
// Um valor negativo, a será colocado antes de b.- Um valor positivo, a será colocado após b.- Zero, a ordem de a e b não será alterada.

var pessoas = [

    { nome: "Jõao", idade: 25 },

    { nome: "Maria", idade: 30 },

    { nome: "Pedro", idade: 20 },

    { nome: "Jõao", idade: 25 }

]

pessoas.sort(function (a, b) {
    return a.idade - b.idade;
});

console.log(pessoas);

// concatenando Array

var motos = ['Hayabusa','Hornete','XJ6','S1000 RR', 'XRE','Meteor 650'];

var veículos = carros.concat(motos);

console.log(veículos);

//startsWith verifica se uma determinada String começa com uma letra e retorna T or F

var nome = 'Marcos'

console.log(nome.startsWith('M',0)); // 0 indica a posição
console.log(nome.startsWith('M',1)); 
console.log(nome.startsWith('m',1)); 

// filter é usado para criar um Array com elementos que atendam certo requesito

var veículos_M = veículos.filter(function(carro){
    return carro.startsWith('M');
});

console.log(veículos_M);

var pessoas = [ {nome: "João", idade: 25}, {nome: "Maria", idade: 30}, {nome: "Pedro", idade: 20}];
var pessoasMaiores = pessoas.filter(function(pessoa) {
return pessoa.idade > 25;
});
console.log(pessoasMaiores);