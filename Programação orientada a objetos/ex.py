class Pessoal:
    def __init__(self, nome, idade, nacionalidade):
        self.nome = nome
        self.idade = idade
        self.nacionalidade = nacionalidade

    def boas (self):
        print(f'Olá {self.nome}! Você possui {self.idade} anos e é {self.nacionalidade}.')

pessoa1 = Pessoal('Marcos',20,'Brasileiro')
pessoa1.boas()


        