# Biblioteca
class Livro:
    def __init__(self, titulo, autor, ano_publicacao):
        self.titulo = titulo
        self.autor = autor
        self.ano_publicacao = ano_publicacao
        self.is_disponivel = False

    def disponibilizar(self):
        self.is_disponivel = True
    def emprestar(self):
        self.is_disponivel = False 
    def devolver(self):
        self.is_disponivel = True
    def informacoes(self):
        print(f'Título: {self.titulo}')
        print(f'Autor: {self.autor}')
        print(f'Ano de publicação: {self.ano_publicacao}')
        print(f'Disponível: {self.is_disponivel}')
        print('')



# Inserir livro Machado de Assis - Dom Casmurro

livro1 = Livro('Dom Casmurro', 'Machado de Assis', 1899)

livro1.informacoes()
livro1.disponibilizar()
livro1.informacoes()