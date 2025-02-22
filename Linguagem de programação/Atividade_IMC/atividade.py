import tkinter as tk
from tkinter import messagebox

#Função que será executada quando o botão for pressionado
def mostrar_mensagem():
    peso = entrada_peso.get()
    altura = entrada_altura.get()
    if peso == "":
        messagebox.showwarning("Atenção", "Digite seu peso!")

    if altura == "":
        messagebox.showwarning("Atenção", "Digite sua altura!")

    else:
        altura = float(altura)
        IMC = round(int(peso)/(altura * altura))
        if IMC >= 19 and IMC <= 24:
           mensagem = f"Seu IMC é de {IMC}! Está no peso ideal."
           messagebox.showinfo("IMC", mensagem)
        elif IMC >= 25 and IMC <= 29:
           mensagem = f"Seu IMC é de {IMC}! Está com sobre peso."
           messagebox.showinfo("IMC", mensagem)
        elif IMC >= 30 and IMC <= 34:
           mensagem = f"Seu IMC é de {IMC}! Está com obesidade grau 1."
           messagebox.showinfo("IMC", mensagem)
        elif IMC >= 35 and IMC <= 39:
           mensagem = f"Seu IMC é de {IMC}! Está com obesidade grau 2."
           messagebox.showinfo("IMC", mensagem)
        else:
         mensagem = f"Seu IMC é de {IMC}! Está com obesidade grau 3."
         messagebox.showinfo("IMC", mensagem)


# Configuração da janela principal
janela = tk.Tk()
janela.iconbitmap('icone.ICO')
janela.title("IMC")
janela.geometry("300x200")

# Criação de um rótulo para instrução
rotulo = tk.Label(janela, text="Digite seu peso e altura respectivamente:")
rotulo.pack(padx=10, pady=10)

# Criação de uma entrada de texto
entrada_peso = tk.Entry(janela)
entrada_peso.pack(padx=10, pady=10)

entrada_altura = tk.Entry(janela)
entrada_altura.pack(padx=10, pady=10)

# Criação de um botão para exibir a mensagem
botao = tk.Button(janela, text="Exibir Resultado", command=mostrar_mensagem)
botao.pack(padx=10, pady=10)

# Iniciar a aplicação
janela.mainloop()
