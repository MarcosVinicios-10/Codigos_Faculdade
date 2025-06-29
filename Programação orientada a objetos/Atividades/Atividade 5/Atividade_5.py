class veículo:
    def __init__(self,marca,modelo,ano,velocidade_atual):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
        self.velocidade = velocidade_atual
    
    def __str__(self):
        return f'Marca: {self.marca}\nModelo: {self.modelo}\nAno: {self.ano}\nVelocidade: {self.velocidade}\n'

    def acelerar(self,quantidade):
        self.velocidade = self.velocidade + quantidade
        if self.velocidade > 500:
            self.velocidade = 500
    def frear(self,quantidade):
        self.velocidade = self.velocidade - quantidade
        if self.velocidade < 0:
            self.velocidade = 0
    
class Carro(veículo):
    def __init__(self,portas,acentos,tamanho_protaMalas):
        self.portas = portas
        self.acentos = acentos
        self.porta_malas = tamanho_protaMalas


camaro = veículo('chev','camaro',2015,80)
Carro(2,4,45)
print(camaro.acelerar(120))
print(camaro)