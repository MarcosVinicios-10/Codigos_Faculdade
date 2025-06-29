const pessoa = {
    nome: 'Carla',
    idade: 28,
    profissao: 'Programadora'
};

for (const x in pessoa){
    console.log(`${x}: ${pessoa[x]}`)
};