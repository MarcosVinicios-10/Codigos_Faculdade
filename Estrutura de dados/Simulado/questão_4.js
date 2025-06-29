const livro = {
    título: 'Harry Potter',
    autor: 'Jk',
    anoPublicacao: 1999
};

for (x in livro){
    console.log(`${x}: ${livro[x]}`)
};