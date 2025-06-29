import numpy as np
import requests
class Math:
    def __init__(self,dados):
        self.dados = dados
    
    def Soma(self):
        return np.sum(self.dados)
    def média(self):
        return np.mean(self.dados)
    def desvio_padrão(self):
        return np.std(self.dados)
    
class ManipularStrings:
    def __init__(self,string):
        self.string = string
    def Maiuscula(self):
        return self.string.upper()
    def Minuscula(self):
        return self.string.lower()
    
class Converter_Real:
    def __init__(self,valor):
        self.valor = valor
        self.moeda = 'Real'

    def Real_Para_Dolar(self):
        url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
        dados = (requests.get(url)).json()
        cotação = float(dados['USDBRL']['bid'])
        self.valor = self.valor/cotação
        self.moeda = 'Dolar'
        return self.valor
    
    def Dolar_Para_Real(self):
        url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
        dados = (requests.get(url)).json()
        cotação = float(dados['USDBRL']['bid'])
        self.valor = self.valor*cotação
        self.moeda = 'Real'
        return self.valor
    
    def Real_Para_Iene(self):
        url = 'https://economia.awesomeapi.com.br/json/last/JPY-BRL'
        dados = (requests.get(url)).json()
        cotação = float(dados['JPYBRL']['bid'])
        self.valor = self.valor/cotação
        self.moeda = 'Iene'
        return self.valor
    
    def Iene_Para_Real(self):
        url = 'https://economia.awesomeapi.com.br/json/last/JPY-BRL'
        dados = (requests.get(url)).json()
        cotação = float(dados['JPYBRL']['bid'])
        self.valor = self.valor*cotação
        self.moeda = 'Real'
        return self.valor
    

dados = Math([1,2,3,4,5,6,7,8,9,10])
print(dados.Soma())
print(dados.média())
print(dados.desvio_padrão())
print('\n')

string = ManipularStrings('Yokoso Watashi No Soul Society')
print(string.Maiuscula())
print(string.Minuscula())
print('\n')

real = Converter_Real(100)
print(real.Real_Para_Dolar())
print(real.moeda)
print('\n')
print(real.Dolar_Para_Real())
print(real.moeda)
print('\n')
print(real.Real_Para_Iene())
print(real.moeda)
print('\n')
print(real.Iene_Para_Real())
print(real.moeda)
print('\n')
