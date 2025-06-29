class Pessoa():
    def __init__(self,nome,idade):
        self.nome = nome
        self.idade = idade

class Aluno(Pessoa):
    def __init__(self,nome,idade,matrícula,semestre):
        super().__init__(nome,idade)
        self.matrícula = matrícula
        self.semestre = semestre

Marcos = Aluno('Marcos',20,20252020,3)
print(Marcos.nome)
print(Marcos.idade)
print(Marcos.matrícula)
print(Marcos.semestre)