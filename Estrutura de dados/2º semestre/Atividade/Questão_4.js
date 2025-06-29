function média(dados) {
    var mediasAlunos = {};
    var maior = ["",0];
    var médiaGeral = 0;

    for (let i=0;i<dados.length;i++){
        var temp = 0;
        for (j=0;j<dados[i].notas.length;j++){
            temp = temp + dados[i].notas[j];
        };

        mediasAlunos[dados[i].nome] = temp/3;
        médiaGeral = temp/3;

        if (temp/3 > maior[1]){
            maior[0] = dados[i].nome;
            maior[1] = temp/3;
        };
    };

    médiaGeral = médiaGeral/3;
    console.log(`A maior nota é do aluno(a) ${maior[0]} com ${maior[1]} de média.`);
    console.log("A média geral é de:", médiaGeral);
    var chaves = Object.keys(mediasAlunos);
    console.log('A média dos alunos é: ');
    for (let i = 0; i < chaves.length; i++) {
        console.log(`${chaves[i]}: ${mediasAlunos[chaves[i]]} `);
        
    };
};


const alunos = [
{ nome: "Alice", notas: [8, 7.5, 9] },
{ nome: "Bruno", notas: [6, 5.5, 7] },
{ nome: "Carla", notas: [10, 9.5, 9] }
];

média(alunos);