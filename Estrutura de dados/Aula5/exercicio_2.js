const carros = {
    marca: 'Toyota',
    modelo: 'Corolla',
    Ano: 2020,
    ligado: false,
    ligar : function ligar(){
        carros.ligado = true
        console.log('O carro está ligado!')
    }
};
carros.ligar();
console.log(carros.ligado);