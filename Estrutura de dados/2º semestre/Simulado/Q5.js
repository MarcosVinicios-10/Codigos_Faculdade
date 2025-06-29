//Questão 5: Objetos
//Crie uma função chamada criarPessoa que recebe nome, idade e cidade como parâmetros. A função deve retornar um objeto com essas propriedades. 
//Adicione também um método apresentar a este objeto que retome uma string no formato:
//"Olá, meu nome é [nome], tenho [idade] anos e moro em (cidade]."

function criarPessoa(nome,idade,cidade) {
    let objeto = {
        nome: nome,
        idade: idade,
        cidade: cidade,
        apresentar: function (){ console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`)}
    };

    return objeto;
};


var teste = criarPessoa('Marcos',20,'Formosa');
teste.apresentar();