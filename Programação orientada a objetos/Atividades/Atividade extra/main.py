# Não deu tempo de terminar.


class atelie:
    def __init__(self,nome,endereço,contato,abertura,fechamento):
        self.nome = nome
        self.endereço = endereço
        self.contato = contato
        self.abertura = abertura
        self.fechamento = fechamento
    
    def cadastrar_atelie():
        nome = input('Insira o nome da sua empresa: ')
        endereço = input('Endereço: ')
        contato = input('Contato: ')
        abertura = input('Horario de abertura: ')
        fechamento = input('Fechamento: ')
        print('Cadastro relaizado com sucesso!\n')
        return nome, atelie(nome,endereço,contato,abertura,fechamento)

    def informações_atelie(self):
        print(f'Nome: {self.nome}\nContato: {self.contato}\nEndereço: {self.endereço}\nAbertura: {self.abertura}\nFechamento: {self.fechamento}')

class Clientes:
    def __init__(self,nome,idade,contato,email,endereço,cores,estilos,tecidos):
        self.nome = nome
        self.idade = idade
        self.contato = contato
        self.email = email
        self.endereço = endereço
        self.cores = cores
        self.estilos = estilos
        self.tecidos = tecidos

    def cadastrar_cliente():
        nome = input('Insira o nome do cliente: ')
        idade = input('Idade: ')
        contato = input('Contato: ')
        email = input('Email: ')
        endereço = input('Endereço: ')
        cores = input('Cores preferidas (separadas por vírgula): ').split(',')
        estilos = input('Estilos preferidos (separados por vírgula): ').split(',')
        tecidos = input('Tecidos preferidos (separados por vírgula): ').split(',')
        print('Cadastro relaizado com sucesso!\n')
        return nome, Clientes(nome, idade, contato, email, endereço, cores, estilos, tecidos)
    
    def informações_cliente(self):
        print(f'Nome: {self.nome}\nIdade: {self.idade}\nContato: {self.contato}\nEmail: {self.email}\nEndereço: {self.endereço}\nCores: {self.cores}\nEstilos: {self.estilos}\nTecidos Favoritos: {self.tecidos}')

    def nomes_clientes():
        for x in clientes_registrados:
            print(x[0])
        
class encomendas():
    def __init__(self,nome,tipo_roupa,cor,tecido,busto,quadril,cintura):
        self.nome = nome
        self.tipo = tipo_roupa
        self.cor = cor
        self.tecido = tecido
        self.busto = busto
        self.quadril = quadril
        self.cintura = cintura
        self.status = 'Produçao'

    def cadastrar_encomenda():
        nome = input('Nome do cliente: ')
        if nome in (x[0] for x in clientes_registrados):
            tipo_roupa = input('Tipo de roupa: ')
            cor = input('Cor: ')
            tecido = input('Tecido: ')
            busto = float(input('Medida do busto: '))
            quadril = float(input('Medida do quadril: '))
            cintura = float(input('Medida da cintura: '))
            print('Cadastro relaizado com sucesso!\n')
            return (nome, encomendas(nome, tipo_roupa, cor, tecido, busto, quadril, cintura))
        else:
            print(f'O Cliente {nome} não possui cadastro no loja, por favor realize seu cadastro.')
            return
    
    def status_atual(self):
        print(f'O status atual do(a) {self.tipo} é: {self.status}')

    def atualizar_status(self,obj,situação):
        obj.status = situação
    
    def listar_encomendas():
        for x in encomendas_registradas:
            print(f"Nome: {x[1].nome}")
            print(f"Tipo de Roupa: {x[1].tipo}")
            print(f"Cor: {x[1].cor}")
            print(f"Tecido: {x[1].tecido}")
            print(f"Busto: {x[1].busto}")
            print(f"Quadril: {x[1].quadril}")
            print(f"Cintura: {x[1].cintura}")
            print(f"Status: {x[1].status}")
            print("-" * 20)

    def listar_encomendas_por_cliente(nome_para_consulta1):
        for x in encomendas_registradas:
            if x[0] == nome_para_consulta1:
                print(f"Nome: {x[1].nome}")
                print(f"Tipo de Roupa: {x[1].tipo}")
                print(f"Cor: {x[1].cor}")
                print(f"Tecido: {x[1].tecido}")
                print(f"Busto: {x[1].busto}")
                print(f"Quadril: {x[1].quadril}")
                print(f"Cintura: {x[1].cintura}")
                print(f"Status: {x[1].status}")
                print("-" * 20)


clientes_registrados = [('Marcos',Clientes('Marcos',20,619898,'marcos@gmail.com','Rua 20',['vermelho','azul','preto'],['Camiseta com mangas','Minimalista'],['Pano','Oxford'])),('maria','jnandjnand')]
encomendas_registradas = [('Marcos',encomendas('marcos','terno','preto','Lã',20,30,40))]
loja = []
comandos_do_programa = {
        'Cadastrar Loja': atelie.cadastrar_atelie,
        'Cadastrar Clientes': Clientes.cadastrar_cliente,
        'Cadastrar Encomenda': encomendas.cadastrar_encomenda,
        'Informações da Loja': atelie.informações_atelie,
        'Nomes dos Clientes': Clientes.nomes_clientes,
        'Informações do Cliente': Clientes.informações_cliente,
        'Encomendas': encomendas.listar_encomendas,
        'Encomendas de cliente': encomendas.listar_encomendas_por_cliente,
        'Atualizar Status': encomendas.atualizar_status
    }




if __name__ == "__main__":    
    print('Seja Bem-Vindo!')
    
    while True:
        instrução = input('O que deseja fazer? ')
        print('\n')
        
        if instrução == 'Cadastrar Loja':
            loja.append(comandos_do_programa[instrução]())

        elif instrução == 'Cadastrar Clientes':
            clientes_registrados.append(comandos_do_programa[instrução]())

        elif instrução == 'Cadastrar Encomenda':
            encomendas_registradas.append(comandos_do_programa[instrução]())

        elif instrução == 'Informações da Loja':
            try:
             comandos_do_programa[instrução](loja[0][1])
            except:
                print('Não existe loja cadastrada no sistema.')

        elif instrução == 'Informações do Cliente':
            nome_para_consulta = input('Insira o nome do cliente que deseja buscar: ')
            if nome_para_consulta in (x[0] for x in clientes_registrados):
                for x in clientes_registrados:
                    if x[0] == nome_para_consulta:
                        nome_para_consulta = x[1]
                comandos_do_programa[instrução](nome_para_consulta)
            else: 
                print('Não existe um cliente com este nome no sistema.\n')

        elif instrução == 'Encomendas de cliente':
            nome_para_consulta = input('Insira o nome do cliente que deseja buscar: ')
            if nome_para_consulta in (x[0] for x in encomendas_registradas):
                comandos_do_programa[instrução](nome_para_consulta)
            else: 
                print('Não existe um cliente com este nome no sistema.\n')
        elif instrução == 'Atualizar Status':
            nome_cliente = input('Informe o nome do Cliente: ')
            item = input('Qual o item que deseja atualizar: ')

            for x in encomendas_registradas:
                if x[0] == nome_cliente:
                    if x[1].tipo == item:
                      condição = input('Insira a condição atual da encomenda: ')
                      comandos_do_programa[instrução](x[1],condição)
        else: 
            try:
                comandos_do_programa[instrução]()
            except:
                print('Comando não encontrado.\n')
        
        




marcos = Clientes('Marcos',20,619898,'marcos@gmail.com','Rua 20',['vermelho','azul','preto'],['Camiseta com mangas','Minimalista'],['Pano','Oxford'])
encomenda_terno = encomendas(marcos,'terno','preto','Lã',20,30,40)
