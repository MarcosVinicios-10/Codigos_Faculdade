import requests
import io
from PIL import Image, ImageTk
import tkinter as tk
from tkinter import ttk



def procurar_pokémon():
    while True:
        nome = entrada.get()
        try:
            url = f'https://pokeapi.co/api/v2/pokemon/{nome}'
            resposta = requests.get(url)
            resposta.raise_for_status()
            dados = resposta.json()
            erro.config(text='')
        except requests.exceptions.HTTPError as e:
            erro.config(text=f'{e}')
            return
        
        # Informações sobre o Pokémon
    
        nome = dados['name']
        id = dados['id']
        tipo = [tipo['type']['name'] for tipo in dados['types']]
        habilidades = [habilidade['ability']['name'] for habilidade in dados['abilities']]
        altura = dados['height']/10
        peso = dados['weight']/10
        held_items = [item['item']['name'] for item in dados['held_items']]
        stats = [[status['stat']['name'],status['base_stat']] for status in dados['stats']]

        # Sprite

        sprite = (dados['sprites']['other']['official-artwork']['front_default'])
        foto = requests.get(sprite)
        imagem = Image.open(io.BytesIO(foto.content))


    
        imagem_tk = ImageTk.PhotoImage(imagem)
        image_label.config(image=imagem_tk)
        label.image = imagem_tk
        
        nome_poke.config(text=f'{nome.capitalize()} - ID #{id}',font=('Arial',20))
        tipos_tk.config(text=f'Tipo(s): {" e " .join([t.capitalize() for t in tipo])}',font=('Arial',15))
        habilidades_tk.config(text=f'Habilidade(s): {", " .join([habilidade.capitalize() for habilidade in habilidades])}',font=('Arial',15))

        if len(held_items)>= 1:
            items_tk.config(text=f'Itens: {", " .join( i.capitalize() for i in held_items)}',font=('Arial',15))
        else: 
            items_tk.config(text=f'Itens: Nenhum',font=('Arial',15),background='lightblue')
        peso_altura_tk.config(text=f'Peso: {peso}Kg e Altura {altura}M',font=('Arial',15))

        status_tk.config(text=f'{" | ".join(f"{stat[0].upper()}: {stat[1]}" for stat in stats)}', font=('Arial', 15))

        return


       

janela  = tk.Tk()
janela.geometry('1000x1000')
janela.title('PokémonDB')

filename = tk.PhotoImage(file = "C:\\Marcos\\Programação\\IESGO\\Programação orientada a objetos\\Pokémon\\pikachu.png")
background = ttk.Label(janela,image=filename)
background.place(relheight=1,relwidth=1)

label = ttk.Label(master=janela,text='Pokémon DataBase',font=('Arial',15),background='lightblue')
label.pack()
entrada= ttk.Entry(master=janela)
entrada.pack()

pesquisar = ttk.Button(master=janela,text='Pesquisar',command=procurar_pokémon)
pesquisar.pack()

erro = ttk.Label(master=janela, text='',background='lightblue')
erro.pack()

nome_poke = ttk.Label(master=janela,text='',background='lightblue')
nome_poke.pack()

image_label = ttk.Label(janela, image='',background='lightblue')
image_label.pack()

tipos_tk = ttk.Label(master=janela,text='',background='lightblue')
tipos_tk.pack()

habilidades_tk = ttk.Label(master=janela,text='',background='lightblue')
habilidades_tk.pack()

items_tk = ttk.Label(master=janela,text='',background='lightblue')
items_tk.pack()

peso_altura_tk = ttk.Label(master=janela,text='',background='lightblue')
peso_altura_tk.pack()

status_tk = ttk.Label(master=janela,text='',background='lightblue')
status_tk.pack()

janela.mainloop()
