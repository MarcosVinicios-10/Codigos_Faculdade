function mostra(mostra) {
    document.write(mostra);
}
function PulaLinha(){
    document.write('<br>');
}

var x = 2
var marcos = 0
var jose = 0
var aline = 0
var thaina = 0
var nulos = 0
var branco = 0
var total = 0
while( x > 1){
    var voto = parseInt(prompt('Marcos-1/josé-2/Aline-3/Thainá-4. Votos Nulos-0 e em Branco-5. Caso não haja mais fotos digite 9 para sair.'));
    
    if(voto==9){
        break;
    }

    if(voto==1){
        var marcos = marcos + 1
    }else if(voto==2){
        var jose = jose + 1
    }else if(voto==3){
        var aline = aline + 1
    }else if(voto==4){
        var thaina = thaina + 1
    }else if(voto==0){
        var nulos = nulos + 1
    }else if(voto==5){
        var branco = branco + 1
    }

    var total = total + 1;
}

mostra('O total de votos de Marcos foi ' + marcos);
PulaLinha();
mostra('O total de votos de José foi ' + jose);
PulaLinha();
mostra('O total de votos de Aline foi ' + aline);
PulaLinha();
mostra('O total de votos de Thainá foi ' + thaina);
PulaLinha();
mostra('O total de votos de nulos foi ' + nulos);
PulaLinha();
mostra('O total de votos de brancos foi ' + branco);
PulaLinha();
mostra('A porcentagem de votos nulos sobre o total de votos foi: ' + ((nulos/total) * 100)+'%')
PulaLinha();
mostra('A porcentagem de votos brancos sobre o total de votos foi: ' + ((branco/total) * 100)+'%')