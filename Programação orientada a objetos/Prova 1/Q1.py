class Banco:
    def __init__(self,nome,idade,renda,saldo):
        self.nome = nome
        self.idade = idade
        self.renda = renda
        self.saldo = saldo
    
    def sacar(self,valor):
        self.saldo -= valor
        print(f'Você sacou R$ {valor} reais. Seu saldo atual é R$ {self.saldo}.')
    def depositar(self,valor):
        self.saldo += valor
        print(f'Você depositou R$ {valor} reais. Seu saldo atual é R$ {self.saldo}.')
    def verSaldo(self):
         print(f'Seu saldo atual é R$ {self.saldo}.')

marcos = Banco('Marcos',20,2000,5000)
marcos.verSaldo()
marcos.depositar(500)
marcos.sacar(5250)
marcos.verSaldo()