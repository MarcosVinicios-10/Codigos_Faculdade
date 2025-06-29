const carros = {
    marca: 'Toyota',
    modelo: 'Corolla',
    Ano: 2020,
    ligado: false
};
chaves = Object.keys(carros);
chaves.forEach( item => {
    console.log(`${item}: ${carros[item]}`)
});

