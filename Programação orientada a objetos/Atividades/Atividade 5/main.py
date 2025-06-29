class Veiculo:
    def __init__ (self, marca, modelo, ano):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
        self._velocidade_atual = 0 # interna (privada)
        self.ligado = False # Estado do motor (ligado ou desligado)
        self.quilometragem = 0 # Total da quilometragem percorrida

    @property
    def velocidade_atual(self):
        return self._velocidade_atual
    
    @velocidade_atual.setter
    def velocidade_atual(self, valor):
        if valor < 0:
            self._velocidade_atual = 0
        elif valor > 300:
            self._velocidade_atual = 300
        else:
            self._velocidade_atual = valor
    
    #Método para ligar o veículo
    def ligar(self):
        if not self.ligado:
            self.ligado = True
            print(f"{self.marca} - {self.modelo} está ligado!")
        else:
            print(f"O {self.marca} - {self.modelo} já está ligado, não precisa ligar novamente...")

    # Acelerar o veículo
    def acelerar(self, quantidade):
        if not self.ligado:
            print("O veículo está desligado, não é possível acelerar")
        else:
            self.velocidade_atual += quantidade
            print(f"Acelerando... Velocidade atual: {self.velocidade_atual} km/h")
    
    #Método para frear o veículo
    def frear(self, quantidade):
        self.velocidade_atual -= quantidade
        print(f"Freando... Velocidade atual: {self.velocidade_atual:.2f} km/h")

    # Realizar a viagem e atualizar a quilometragem
    def viajar(self, distancia):
        if not self.ligado:
            print("O veículo está desligado. Ligue o veículo se quiser viajar")
        else:
            self.quilometragem += distancia
            print(f"Você viajou {distancia}km.\nQuilometragem total: {self.quilometragem}km")
    
    def __str__(self):
        status = "Ligado" if self.ligado else "Desligado"
        return (f"{self.marca} - {self.modelo} ({self.ano}) | "
                f"Velocidade: {self.velocidade_atual:.2f} km/h |"
                f"Status: {status}, Quilometragem: {self.quilometragem} km")
    
class Carro(Veiculo):
    def __init__(self, marca, modelo, ano, numero_portas):
        super().__init__(marca, modelo, ano)
        self.numero_portas = numero_portas
        self.marcha_atual = 0
    
    def acelerar(self, quantidade):
        if not self.ligado:
            print("O carro está desligado. Ligue o carro no contato se quiser acelerar")
        else:
            aumento = quantidade * 1.2
            self.velocidade_atual += aumento
            print(f"Acelerando o carro... Velocidade atual: {self.velocidade_atual:.2f} Km/h")
    
    # Método para trocar de marcha
    def trocar_marcha(self, nova_marcha):
        self.marcha_atual = nova_marcha
        print(f"Mudou de marcha para {self.marcha_atual}")
    
    def __str__(self):
        base_str = super().__str__()
        return f"{base_str} | Portas: {self.numero_portas} | Marcha: {self.marcha_atual}"


class Moto(Veiculo):
    def __init__(self, marca, modelo, ano, cilindrada):
        super().__init__(marca, modelo, ano)
        self.cilindradas = cilindrada
        self.marcha_atual = 0
    
    def acelerar(self, quantidade):
        if not self.ligado:
            print(f"A {self.modelo} está desligada. Ligue a moto no contato se quiser acelerar")
        else:
            aumento = quantidade * 1.1
            self.velocidade_atual += aumento
            print(f"Acelerando a {self.modelo}... Velocidade atual: {self.velocidade_atual:.2f} Km/h")
    
    def trocar_marcha(self, nova_marcha):
        self.marcha_atual = nova_marcha
        print(f"Mudou de marcha para {self.marcha_atual}")
    
    def __str__(self):
        base_str = super().__str__()
        return f"{base_str} | Celindradas: {self.cilindradas} | Marcha: {self.marcha_atual}"

class Caminhão(Veiculo):
    def __init__(self, marca, modelo, ano, eixos):
        super().__init__(marca, modelo, ano)
        self.eixo = eixos
        self.marcha_atual = 0
    
    def acelerar(self, quantidade):
        if not self.ligado:
            print(f"O {self.modelo} está desligado. Ligue o caminhão no contato se quiser acelerar")
        else:
            aumento = quantidade 
            self.velocidade_atual += aumento
            print(f"Acelerando o {self.modelo}... Velocidade atual: {self.velocidade_atual:.2f} Km/h")
    
    def trocar_marcha(self, nova_marcha):
        self.marcha_atual = nova_marcha
        print(f"Mudou de marcha para {self.marcha_atual}")
    
    def __str__(self):
        base_str = super().__str__()
        return f"{base_str} | Eixos: {self.eixo} | Marcha: {self.marcha_atual}"



if __name__ == "__main__":
    print('___TESTE MOTO___\n\n')
    haybusa = Moto('Suzuki','Haybusa',1999,1298)
    haybusa.ligar()
    haybusa.trocar_marcha(3)
    haybusa.acelerar(40)
    haybusa.frear(60)
    print(haybusa)
    haybusa.acelerar(50)
    haybusa.viajar(20)
    haybusa.frear(120)
    haybusa.trocar_marcha(0)
    print(haybusa)
    print('\n')

    print('___TESTE CAMINHÂO___\n\n')
    mercedes_caminhão = Caminhão('Mercedes-Benz',1113,1983,3)
    mercedes_caminhão.ligar()
    mercedes_caminhão.trocar_marcha(1)
    mercedes_caminhão.acelerar(10)
    mercedes_caminhão.trocar_marcha(2)
    mercedes_caminhão.acelerar(10)
    mercedes_caminhão.trocar_marcha(3)
    mercedes_caminhão.acelerar(10)
    mercedes_caminhão.viajar(30)
    print(mercedes_caminhão)
    print('\n')

    print('___TESTE CAMINHÂO___\n\n')
    camaro = Carro('chev','camaro',2015,2)
    camaro.trocar_marcha(1)
    camaro.ligar()
    camaro.acelerar(120)
    print(camaro)
