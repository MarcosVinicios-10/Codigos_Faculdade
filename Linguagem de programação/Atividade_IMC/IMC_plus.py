import pyfiglet

welcome = pyfiglet.figlet_format('Bem-vindo ao teste de IMC!', justify='center')
print(welcome)

dados_IMC = {
     'IMC'  : [(list(range(19,25)),'peso ideal')],
     'IMC2' : [(list(range(25,30)),'sobre peso')],
     'IMC3' : [(list(range(30,35)),'obesidade grau 1')],
     'IMC4' : [(list(range(35,40)),'obesidade grau 2')],
     'IMC5' : [(list(range(40,100)),'obesidade Grau 3')]
}

def IMC():
       print('*' * 20)
       while True:
              try:
                peso = float(input('Insira seu peso: '))
                altura = float(input('Insira sua altura: '))
                break
              except:
                   print('ERRO! Insira um número!')

       valor_IMC = round((peso)/(altura * altura))

       for i in dados_IMC.keys():
            if valor_IMC in dados_IMC[i][0][0]:
                 print(f'Seu IMC é de {valor_IMC}, o que signifca que você está com {dados_IMC[i][0][1]}.')
                 finalizar = input('Deseja encerrar o programa? (S/N) ')
                 print('*' * 20, '\n')
                 if finalizar in ['S','s','']:
                      print(pyfiglet.figlet_format('Obrigado!\n By Marcos Afonso', justify='center'))
                      return
                 else:
                      return IMC()
                 
       print('Parece que o seu IMC é um valor incomum, tente novamente.')
       return IMC()

IMC()