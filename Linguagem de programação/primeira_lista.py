#Aluno: MArcos Vinicios Afonso
#Ex 1
nome = 'Marcos'
idade = 19
print(f'Meu nome é {nome} e minha idade é {idade} anos.') 

#Ex 2
A = 10
B = 5
soma = A+B
print(f'O resultado da soma é {soma}.')

#Ex 3
numero = 7
resultado = 7*3
print(f'O resultado da multiplicação é {resultado}.')

#Ex 4
valor1 = 20
valor2 = 4
resultado = valor1 - valor2
print(f'O resultado da subtração é {resultado}.')

#Ex 5
numerador = 50 
denominador = 2
resultado = numerador/denominador
print(f'O resultado da divisão é {resultado}.')

#Ex 6
def cumprimento(nome):
    return f'Olá {nome}!'
print(cumprimento(nome))

#Ex 7
def soma(x,y):
    resultado = x+y
    return resultado
print(soma(3,7))

#Ex 8
def multiplicação(x,y):
    resultado = x*y
    return resultado
print(multiplicação(3,7))

#Ex 9 
primeiro_nome = 'Marcos'
segundo_nome = 'Afonso'
nome_completo = f'{primeiro_nome} {segundo_nome}'
print(nome_completo)

# Ex 10
def mensagem(nome):
    saudacao = f'Bom dia {nome}!'
    return saudacao
print(mensagem(nome))
