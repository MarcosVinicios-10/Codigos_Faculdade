// Objetos são iguais dicionários

// Dicionario e função para criar um
var celta = {
    nome: 'Celta',
    ano: 2006,
    cor: 'Vermelho',
    motor: 1.0
};

function criar_veiculo(nome,ano,cor,motor){
    this.nome = nome
    this.ano = ano
    this.cor = cor
    this.motor = motor
};

// Criando um veiculo

var corsa = new criar_veiculo('Corsa',1999,'Verde',1.0);
console.log(corsa);
console.log(celta);
console.log(corsa.cor);
console.log('\n');

// Adicionando informações

corsa.portas = 2;
corsa.tração = 'Dianteira';
corsa.cambio = 'Manual',
console.log(corsa);
console.log('\n')

// Retirando

delete corsa.cambio;
console.log(corsa)
console.log('\n')

// verificar se existe

console.log('nome' in corsa);
console.log('\n');

// Trasnformar em string

var celta_string = JSON.stringify(celta);
console.log(celta_string);
console.log('\n');

// converter para objeto

celta_obj = JSON.parse(celta_string);
console.log(celta_obj);
console.log('\n');

// Interando

chaves = Object.keys(corsa)
chaves.forEach(chave => {
    console.log(`${chave}: ${corsa[chave]}`)
});

for (x in corsa) {
    console.log(`${x}: ${corsa[x]}`)
};
console.log('\n');

// Acessando informações 

console.log(Object.keys(celta));
console.log(Object.values(celta));
console.log(Object.entries(celta));