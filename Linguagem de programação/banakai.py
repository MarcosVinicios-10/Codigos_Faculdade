'''Exercícios: Manipulando Listas em Python
Criando uma lista de números
Crie uma lista chamada numeros com os números de 1 a 10. Exiba a lista no console.
'''

numeros = [1,2,4,5,6,7,8,9,10]
print(numeros)

'''Acessando elementos por índices
Dada a lista frutas = ["maçã", "banana", "laranja", "uva", "morango"], exiba:
A primeira fruta da lista.
A última fruta da lista usando índice negativo.
'''
frutas = ["maçã", "banana", "laranja", "uva", "morango"]
print(f'A primeira fruta é "{frutas[0]}" e a última é "{frutas[-1]}"')

'''Adicionando e removendo itens

Crie uma lista vazia chamada animais. Adicione os itens "gato", "cachorro" e "pássaro" à lista. Em seguida, remova o item "gato". Exiba a lista atualizada.
Somando números de uma lista
'''
animais = []
animais.extend(('gato','cachorro','passáro'))
animais.remove('gato')
print(animais)

'''
Dada a lista numeros = [2, 4, 6, 8, 10], calcule a soma de todos os números da lista e exiba o resultado.
'''
numeros = [2, 4, 6, 8, 10]
print(f'A soma é {sum(numeros)}')


'''Ordenando uma lista

Crie uma lista chamada idades contendo os valores [34, 12, 23, 56, 18, 45]. Organize a lista em ordem crescente e exiba a lista ordenada.
'''
idades = [34, 12, 23, 56, 18, 45]
idades = sorted(idades)
print(idades)
'''Verificando a existência de um item

Dada a lista cidades = ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador", "Fortaleza"], peça ao usuário para inserir o nome de uma cidade e verifique se ela está presente na lista. Exiba uma mensagem indicando se a cidade foi encontrada ou não.
'''
cidades = ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador", "Fortaleza"]
cidade = input('Insira um cidade: ')
if cidade in cidades:
    print('A cidade existe em nosso banco de dados')
else:
    print('A cidade não existe em nosso banco de dados')


'''Copiando e invertendo uma lista

Crie uma lista chamada cores contendo ["azul", "vermelho", "verde", "amarelo"]. Faça uma cópia da lista e inverta a ordem dos itens. Exiba a lista original e a lista invertida.
'''
cores = ["azul", "vermelho", "verde", "amarelo"]

'''Removendo duplicatas de uma lista

Dada a lista nomes = ["Ana", "Pedro", "Ana", "João", "Pedro", "Maria"], remova os nomes duplicados da lista e exiba a nova lista sem repetições.
'''


'''Listas aninhadas

Dada a lista matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]], exiba o valor central da matriz (número 5) usando índices.
'''

'''Contando a ocorrência de um item

Dada a lista palavras = ["sol", "lua", "estrela", "sol", "lua", "sol"], conte quantas vezes a palavra "sol" aparece na lista e exiba o resultado.
'''