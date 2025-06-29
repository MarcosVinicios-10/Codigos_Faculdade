// Objeto

const pessoa = {
    nome: 'João',
    idade: 30,
    saudção: function(){
        return `Olá, meu nome e ${this.nome} e tenho ${this.idade} anos`;
    }
};

console.log(pessoa.saudção());
console.log("\n");

//Construtor

function Pessoa(nome,idade,cidade){
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
}

let Marcos = new Pessoa('Marcos',20,'Formosa');
let José = new Pessoa('José',14,'Formosa');
console.log(Marcos);
console.log(José);
console.log("\n");

// Construindo de forma literal

const pessoa2 ={
    nome:'Nicole',
    idade:20,
    cidade: 'São João dos Anéis'
};

//Acessando valores 

console.log(pessoa2.nome);
console.log(pessoa2.idade);
console.log("\n");

//Adicionando mais caracteristicas

pessoa2.país='Brasil';
pessoa2.estado='Goiás';
pessoa2.telefone = "080005555";

console.log(pessoa2);
console.log("\n");

// retirando telefone 
delete pessoa2.telefone;
console.log(pessoa2);

//Verificando a existencia de chaves
console.log('país' in pessoa2);
console.log('telefone' in pessoa2);
console.log("\n");

// Interand sobre o objeto

for (const prop in pessoa2){
    console.log(`${prop}: ${pessoa2[prop]}`)
};
console.log("\n");

// Transformando em string

const pessoa2String = JSON.stringify(pessoa2);
console.log(pessoa2String);
console.log("\n");
// Convertendo para objeto

const pessoa2Objeto = JSON.parse(pessoa2String);
console.log(pessoa2Objeto);
console.log("\n");

// Interando sobre chaves e usando ForEach(mais recomendado para objeto)

const carros = {
    marca: 'Toyota',
    modelo: 'Corolla',
    Ano: 2020
};

const chaves = Object.keys(carros);
console.log(chaves);

chaves.forEach(chaves =>{
    console.log(`${chaves} : ${carros[chaves]}`)
});
console.log("\n");

// Acessando os valores

const produto = {
    nome: 'celular',
    preço: 1500,
    estoque: 20
};

const valores = Object.values(produto);
console.log(valores);
console.log("\n");

// Acessando chave e valor

const usuario = {
    nome: 'Lucas',
    email: 'lucas@email.com',
    idade: 28
};

const entradas = Object.entries(usuario);
console.log(entradas);

