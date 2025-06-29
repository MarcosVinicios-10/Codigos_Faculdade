function calcularDesconto(numero){
    if (numero>=100){
        desconto = (numero*15)/100
        return `O desconto é de ${desconto} reais.`
    }else{
        return 'O desconto é aplicado apnas em compras acima de R$ 100,00.'
    }
};

console.log(calcularDesconto(100));
console.log(calcularDesconto(99))