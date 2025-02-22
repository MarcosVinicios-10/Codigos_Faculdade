function Mostra(mostra) {
    document.write(mostra)
}
function PulaLinha(){
    document.write('<br>')
}

var nota = 0;
x = 0;
var media = 0;
var notaMax = 0;
var notaMin = 1000;

//gabarito
var gabarito = ['A', 'B', 'C', 'D', 'E', 'E', 'D', 'C', 'B', 'A']

while(x=>0){
var aluno = prompt(('Digite seu nome ou "SAIR" para encerrar:'));
  if(aluno == 'SAIR'){
     break;
}
var resposta1 = prompt(('Primeira resposta:'));
  if(resposta1 == gabarito[0]) {
      nota = nota + 1;
}
var resposta2 = prompt(('Segunda resposta:'));
  if(resposta2 == gabarito[1]) {
      nota = nota + 1;
}
var resposta3 = prompt(('Terceira resposta:'));
  if(resposta3 == gabarito[2]) {
      nota = nota + 1;
}
var resposta4 = prompt(('Quarta resposta:'));
  if(resposta4 == gabarito[3]) {
     nota = nota + 1;
}
var resposta5 = prompt(('Quinta resposta:'));
  if(resposta5 == gabarito[4]) {
      nota = nota + 1;
}
var resposta6 = prompt(('Sexta resposta:'));
 if(resposta6 == gabarito[5]) {
     nota = nota + 1;
}
var resposta7 = prompt(('Sétima resposta:'));
  if(resposta7 == gabarito[6]) {
      nota = nota + 1;
}
var resposta8 = prompt(('Oitava resposta:'));
  if(resposta8 == gabarito[7]) {
      nota = nota + 1;
}
var resposta9 = prompt(('Nona resposta:'));
  if(resposta9 == gabarito[8]) {
     nota = nota + 1;
}
var resposta10 = prompt(('Décima resposta:'));
  if(resposta10 == gabarito[9]) {
     nota = nota + 1;
}

if(nota > notaMax){
  var notaMax = nota
}

if(nota < notaMin){
    var notaMin = nota
}

Mostra('A nota de ' + aluno + ' foi ' + nota);
var media = media + nota;
nota = 0;
PulaLinha();
var x = x + 1;
}
Mostra('A média das notas foi ' + (media/x));
PulaLinha();
Mostra('A menor nota foi ' + notaMin + ' enquanto a maior foi ' + notaMax);
PulaLinha()
Mostra(x + ' Alunos usaram este sistema.')