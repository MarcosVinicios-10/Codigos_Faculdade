# Criar uma programa de um Zoológico com os atributos nome, localização e lista de animais. Um método que adiciona animais na lista e outro que imprime a lista de animais. 
# Um método que abre e fecha o zoológico. Um método que imprime o status do zoológico (aberto ou fechado). Um outro método que imprime o nome e a localização do zoológico. 
# E outro método que imprime o nome e a espécie de cada animal.


class Zoologico:
    
    def __init__(self,nome,endereço):
        self.nome = nome
        self.endereço = endereço
        self.lista_animais = []
        self.funcionamento = 'Fechado'

    def AddAnimal(self,animal,especie):
        self.lista_animais.append((animal,especie))

    def Animais(self):
        for i in self.lista_animais:
            print(i)

    def AbrirZoo(self):
        self.funcionamento = 'Aberto'
    def FecharZoo(self):
        self.funcionamento = 'Fechado'      

    def Status(self):
        print(self.funcionamento)

    def Localização(self):
        print(f'{self.nome}-{self.endereço}')


print('Olá, este é o programa de gerenciamente do Zoológicos 1.0 \nVamos Fazer as configurações iniciais:')

nome = input('Insira o nome do seu Zoologico: ')
endereço = input('Insira o endereço: ')
zoo = Zoologico(nome,endereço)

print('\nCerto! Agora eis alguns comandos úteis para o gerenciamento:\n\n''AddAnimal: Usado para adicionar animais e sua espécie.\n'
          'Animais: Exibe os aniamis cadastrados no sistema.\n'
          'AbrirZoo: Abre o zoológico (por padrão ele está fechado)\n'
          'FecharZoo: Fecha o Zoológico\n'
          'Status: Informa se o zoológico está aberto ou fechado\n'
          'Localização: Informa a localização e nome do Zoológico\n'
          'Encerrar: Fecha o programa.')

comandos = {
"AddAnimal": zoo.AddAnimal,  
"Animais": zoo.Animais,
"AbrirZoo": zoo.AbrirZoo,
"FecharZoo": zoo.FecharZoo,
"Status": zoo.Status,
"Localização": zoo.Localização
 }


while True:
        comando = input('\nInsira um comando: ')

        if comando == 'Encerrar':
            break
        if comando == 'AddAnimal':
            animal = input('Insira o nome do animal: ')
            especie =  input('Insira o nome da Espécie: ')
            comandos[comando](animal,especie)
        elif comando in comandos:
            comandos[comando]()
        else: 
            print('\nComando Inválido!\n')
