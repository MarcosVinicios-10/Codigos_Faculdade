//Questão 1: Estrutura de Seleção
//Crie uma função chamada verificarIdade que recebe um número inteiro idade como parâmetro. A função deve retornar: - "Jovem' se a idade for menor ou igual a 30.
//'Adulto' se a idade for maior que 30 e menor ou igual a 60, -'Idoso' se a idade for maior que 60.


function verificarIdade(idade) {
    if (idade <= 30)  {
        return 'Jovem';
    }else if(idade >30 && idade <= 60){
        return 'Adulto';
    }else{
        return 'Idoso';
    };
};

const idade = 38;
console.log(verificarIdade(idade));

