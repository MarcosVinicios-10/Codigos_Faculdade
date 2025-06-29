const filtrar = (array, idade_min) =>{
    return array.filter(x => x.IDADE >= idade_min)
};

const PESSOAS= [ { NOME: "JOÃO", IDADE: 25 }, { NOME: "MARIA", IDADE: 30 }, { NOME: "PEDRO", IDADE: 20 }];

console.log(filtrar(PESSOAS,30));

