import tkinter as tk

class buttonPersonalizado(tk.Button):
    def __init__(self, master=None, **kwargs):
        super().__init__(master, **kwargs)
        self.config(bg="blue")

if __name__ == "__main__":
    janela = tk.Tk()
    botão = buttonPersonalizado(janela, text='Oi')
    botão.pack()
    janela.mainloop()