function VerificadorDados(dados,dadosObrigatorios){
  dadosFaltantes =[];
  for (i=0;i<dadosObrigatorios.length;i++){
      if(dadosObrigatorios[i] in dados){
      }else{
        dadosFaltantes.push(dadosObrigatorios[i]);  
      };
  };  
  return dadosFaltantes;
};
const dados = { nome: "Carlos", email: "carlos@email.com" };
const obrigatorios = ["nome", "email", "idade"];

console.log(VerificadorDados(dados,obrigatorios));