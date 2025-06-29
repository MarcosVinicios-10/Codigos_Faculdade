import tkinter as tk
from tkinter import ttk

class AplicacaoListaItens(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Lista de Itens")
        self.geometry("900x720")

        self.criar_widgets()

    def criar_widgets(self):
        self.mensagem = ttk.Label(text='Adicione itens')
        self.mensagem.pack()

        self.caixa = ttk.Entry()
        self.caixa.pack()

        self.adicionar = ttk.Button(text='Adicionar itens',command=self.adicionarItem)
        self.adicionar.pack()

        self.lista = tk.Listbox()
        self.lista.pack()
    
    def adicionarItem(self):
        item = self.caixa.get()
        self.lista.insert(tk.END,item)

if __name__ == "__main__":
    janela = AplicacaoListaItens()
    janela.mainloop()
    