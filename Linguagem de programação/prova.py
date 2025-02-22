import numpy as np
n = []
print('Caso tenha inserido todos os números apenas aperte enter.')
while True:
    try:
        x = float(input('Insira um número com casa decima. Nota: Você deve substituir a vírgula por ponto final: '))
        n.append(x)
    except:
        break

def converter_média(n):
    inteiros = [int(x) for x in n]
    print(f'A média dos números é: {np.mean(n):.2f}')
converter_média(n)




