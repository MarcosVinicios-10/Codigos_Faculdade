//Questão 3: Funções
//Crie uma função chamada calcularAreaRetangulo que recebe dois parâmetros: largura e altura. 
// A função deve retornar a área do retângulo. Se qualquer um dos parâmetros não for um número positivo, a função deve retomar a string 'Entrada inválida.

function calcularAreaRetangulo(largura,altura) {

    if (largura<0 | altura<0) {
        return 'Entrada inválida';
    }else{
        return largura*altura;
    };

};

const largura = 2;
const altura = 6;

console.log(calcularAreaRetangulo(largura,altura));