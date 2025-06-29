//Questão 7: Operadores Condicionais
//Crie uma função chamada statusAluno que recebe dois parâmetros: nota (número) e frequencia (número, em porcentagem). 
// A função deve retornar: - 'Aprovado' se a nota for maior ou igual a 7 e a frequência for maior ou igual a 75. - 'Recuperação' se a nota for maior ou igual a 5 e menor que 7, 
// e a frequência for maior ou igual a 75. -
//'Reprovado' em todos os outros casos.

function statusAluno(nota,frequencia) {
    if (nota >= 7 && frequencia>=75) {
        return 'Aprovado';
    }else if(nota >= 5 && nota <7 && frequencia>=75){
        return 'Recuperação';
    }else{
        return 'Reprovado';
    };
};

const nota = 6;
const frequencia = 78;

console.log(statusAluno(nota,frequencia));
