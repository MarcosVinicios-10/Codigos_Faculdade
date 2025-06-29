function AgruparSetor(objeto){
  agrupados = {};
  for (i=0;i<objeto.length;i++){
    if(i.setor in agrupados){
    }else{
        agrupados[objeto[i].setor]=[];
    };
  };
  for (i=0;i<objeto.length;i++){
      agrupados[objeto[i].setor].push(objeto[i].nome);
  };
  return(agrupados);
};

const funcionarios = [
 { nome: "João", setor: "TI" },
 { nome: "Maria", setor: "RH" },
 { nome: "Pedro", setor: "TI" },
 { nome: "Ana", setor: "Financeiro" },
 { nome: "Lucas", setor: "RH" }
];
console.log(AgruparSetor(funcionarios));