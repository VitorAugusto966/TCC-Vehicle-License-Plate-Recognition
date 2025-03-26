import tkinter as tk
from tkinter import Toplevel
from tkinter import filedialog, messagebox
from tkinter import ttk
import cv2
from PIL import Image, ImageTk
import pytesseract
import numpy as np
from ultralytics import YOLO
import requests


pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def pos_processar_placa_mercosul(placa):
    # Verificar se o comprimento da placa é maior que 7
    # Padrão placa mercosul - LLLNLNN
    if len(placa) > 7:
        placa = placa[:7]  # Manter apenas os primeiros 7 caracteres
    
    # Converter a string para uma lista para fácil manipulação
    lista_placa = list(placa)
    
    # Verificar as três primeiras posições (devem ser letras)
    if len(lista_placa) == 7:
        for i in [0,1,2,4]:
            if lista_placa[i].isdigit():
                if lista_placa[i] == '1':
                    lista_placa[i] = 'I'
                elif lista_placa[i] == '0':
                    lista_placa[i] = 'O'
                elif lista_placa[i] == '2':
                    lista_placa[i] = 'Z'
                elif lista_placa[i] == '8':
                    lista_placa[i] = 'B'
                elif lista_placa[i] == '7':
                    lista_placa[i] = 'Z'
                elif lista_placa[i] == '5':
                    lista_placa[i] = 'S'
                elif lista_placa[i] == '4':
                    lista_placa[i] = 'E'
                elif lista_placa[i] == '6':
                    lista_placa[i] = 'G'
                elif lista_placa[i] == '9':
                    lista_placa[i] = 'E'
    
    # Verificar as posições 4, 6 e 7 (devem ser dígitos)
    
    if len(lista_placa) == 7:
         for i in [3, 5, 6]:
            if lista_placa[i].isalpha():
                if lista_placa[i] == 'I':
                    lista_placa[i] = '1'
                elif lista_placa[i] == 'O':
                    lista_placa[i] = '0'
                elif lista_placa[i] == 'Z':
                    lista_placa[i] = '2'
                elif lista_placa[i] == 'B':
                    lista_placa[i] = '8'
                elif lista_placa[i]== 'S':
                    lista_placa[i] = '5'
                elif lista_placa[i] == 'A':
                    lista_placa[i] = '4'
                elif lista_placa[i] == 'G':
                    lista_placa[i] = '0'
                elif lista_placa[i] == 'Q':
                    lista_placa[i] = '0'
                elif lista_placa[i] == 'D':
                    lista_placa[i] = '0'
    
    # Converter a lista de volta para uma string
    placa_corrigida = ''.join(lista_placa)
    return placa_corrigida

def pos_processar_placa_antiga(placa):
    # Verificar se o comprimento da placa é maior que 7
    if len(placa) > 7:
        placa = placa[:7]  # Manter apenas os primeiros 7 caracteres
    
    # Converter a string para uma lista para fácil manipulação
    lista_placa = list(placa)
    
    # Verificar as três primeiras posições (devem ser letras)
    if len(lista_placa) == 7:
        for i in range(3):
            if lista_placa[i].isdigit():
                if lista_placa[i] == '1':
                    lista_placa[i] = 'I'
                elif lista_placa[i] == '0':
                    lista_placa[i] = 'O'
                elif lista_placa[i] == '2':
                    lista_placa[i] = 'Z'
                elif lista_placa[i] == '8':
                    lista_placa[i] = 'B'
                elif lista_placa[i] == '7':
                    lista_placa[i] = 'Z'
                elif lista_placa[i] == '5':
                    lista_placa[i] = 'S'
                elif lista_placa[i] == '4':
                    lista_placa[i] = 'A'
                elif lista_placa[i] == '6':
                    lista_placa[i] = 'G'
    
    # Verificar as posições 4, 6 e 7 (devem ser dígitos)
    if len(lista_placa) == 7:
         for i in [3, 4, 5, 6]:
            if lista_placa[i].isalpha():
                if lista_placa[i] == 'I':
                    lista_placa[i] = '1'
                elif lista_placa[i] == 'O':
                    lista_placa[i] = '0'
                elif lista_placa[i] == 'Z':
                    lista_placa[i] = '2'
                elif lista_placa[i] == 'B':
                    lista_placa[i] = '8'
                elif lista_placa[i]== 'S':
                    lista_placa[i] = '5'
                elif lista_placa[i] == 'A':
                    lista_placa[i] = '4'
                elif lista_placa[i] == 'G':
                    lista_placa[i] = '6'
                elif lista_placa[i] == 'Q':
                    lista_placa[i] = '0'
                elif lista_placa[i] == 'D':
                    lista_placa[i] = '0'
    
    # Converter a lista de volta para uma string
    placa_corrigida = ''.join(lista_placa)
    return placa_corrigida

# Função para reconhecimento de caracteres
def reconhecimento_placa_mercosul(placa):
    # Realizar o reconhecimento de caracteres com Tesseract OCR
    config = r'-c tessedit_char_whitelist="ABCDEFGHIJKLMNOPQRSTUVWXZYZ0123456789" --psm 10'
    #config = "--psm 8"
    texto_placa = pytesseract.image_to_string(placa, lang="mandatory8", config=config)
    return texto_placa.strip()

def reconhecimento_placa_antiga(placa):
    # Realizar o reconhecimento de caracteres com Tesseract OCR
    config = r'-c tessedit_char_whitelist="ABCDEFGHIJKLMNOPQRSTUVWXZYZ0123456789" --psm 10'
    texto_placa = pytesseract.image_to_string(placa, lang="eng+mandatory9", config=config)
    return texto_placa.strip()
# Função para o pré-processamento da imagem da placa
def preprocessamento_placa_mercosul(placa):
    # Conversão para escala de cinza
    gray = cv2.cvtColor(placa, cv2.COLOR_BGR2GRAY)

    # Redimensionar a imagem para melhorar a leitura de caracteres
    height, width = gray.shape[:2]
    scaling_factor = 4.5  # fator de escala, pode ser ajustado conforme necessário
    resized = cv2.resize(gray, (int(width * scaling_factor), int(height * scaling_factor)))

    # Aplicar filtro de desfoque para reduzir ruído
    blur = cv2.GaussianBlur(resized, (9, 9), 3)

    # Melhorar o contraste (equalização do histograma)
    equalized = cv2.equalizeHist(blur)

    # Aplicar limiar binário (thresholding) para converter a imagem em preto e branco
    _, thresh = cv2.threshold(equalized, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # Aplicar dilatação para melhorar a definição dos caracteres
    kernel = np.ones((3, 3), np.uint8)
    dilated = cv2.dilate(thresh, kernel, iterations=2)
    
    """cv2.imshow("dilated", dilated)
    cv2.waitKey()
    cv2.destroyAllWindows()"""

    return dilated

def preprocessamento_placa_antiga(placa):
    # Redimensionar a imagem para aumentar a resolução
    placa_redimensionada = cv2.resize(placa, None, fx=4.5, fy=4.5, interpolation=cv2.INTER_CUBIC)
    
    # Converter para escala de cinza
    #placa_rgb = cv2.cvtColor(placa_redimensionada, cv2.COLOR_RGB2BGR)
    placa_cinza = cv2.cvtColor(placa_redimensionada, cv2.COLOR_BGR2GRAY)
    
    # Aplicar filtro mediano para reduzir ruído de impulsos (salt and pepper)
    placa_suavizada = cv2.medianBlur(placa_cinza, 5)
    # Binarizar a imagem usando Threshold Otsu
    _, placa_binaria = cv2.threshold(placa_suavizada, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    
    # Aplicar a transformação Morfológica para melhorar a definição dos caracteres
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
    placa_morfologica = cv2.morphologyEx(placa_binaria, cv2.MORPH_CLOSE, kernel)
    
    """cv2.imshow("Morfologica", cv2.resize(placa_morfologica, None, fx=0.2, fy=0.2, interpolation=cv2.INTER_CUBIC))
    cv2.waitKey(0)  # Pressione qualquer tecla para continuar
    cv2.destroyAllWindows()"""
    
    """cv2.imshow("Binaria", placa_binaria)
    cv2.waitKey(0)  # Pressione qualquer tecla para continuar
    cv2.destroyAllWindows()"""
    
    return placa_morfologica
# Função para carregar e detectar placa usando YOLO
def carregar_imagem():
    limpar()
    global imagem
    filepath = filedialog.askopenfilename(
        filetypes=[("Image files", "*.jpg *.jpeg *.png *.bmp")]
    )
    if filepath:
        imagem = cv2.imread(filepath)
        detectar_placa(imagem)

def mostrar_loading():
    """Função para exibir uma janela de loading"""
    global loading_window  # Definir a janela como variável global
    loading_window = Toplevel(app)
    loading_window.wm_overrideredirect(True)  # Remover bordas da janela
    loading_window.geometry(f"200x100+{app.winfo_x() + 300}+{app.winfo_y() + 200}")  # Definir posição e tamanho

    # Label com a mensagem de carregamento
    label = tk.Label(loading_window, text="Processando...", bg="black", fg="white", padx=20, pady=20, font=("Helvetica", 12))
    label.pack()

    # Forçar atualização da janela para exibir imediatamente
    loading_window.update_idletasks()

def esconder_loading():
    """Função para fechar a janela de loading"""
    if loading_window:
        loading_window.destroy()

def mostrar_toast(mensagem, duracao=2000):
    """Função para exibir uma mensagem de notificação temporária"""
    # Criar uma nova janela temporária
    toast = Toplevel(app)
    toast.wm_overrideredirect(True)  # Remover as bordas da janela
    toast.geometry(f"300x50+{app.winfo_x() + 50}+{app.winfo_y() + 50}")  # Definir posição e tamanho

    # Label com a mensagem do toast
    label = tk.Label(toast, text=mensagem, bg="black", fg="white", padx=10, pady=10, font=("Helvetica", 12))
    label.pack()

    # Fechar a janela automaticamente após a duração especificada
    toast.after(duracao, toast.destroy)

# Detecção de placa com YOLO
def detectar_placa(imagem):
    # Carregar o modelo YOLO pré-treinado
    model = YOLO("redes-yolo/placa_brasileira_antiga-mercosul.pt")
    mostrar_loading()

    # Executar o modelo YOLO na imagem
    resultados = model(imagem)

    # Fechar a janela de loading
    esconder_loading()
    
    # Verificar quantas placas foram detectadas
    num_placas = sum([len(result.boxes) for result in resultados])
    
    if num_placas == 0:
        messagebox.showinfo("Detecção de Placas", "Nenhuma placa foi detectada.")
        return  # Encerrar a função se não houver detecção de placas

    # Obter as coordenadas da placa detectada
    for r in resultados:
        for caixa in r.boxes:
            x1, y1, x2, y2 = map(int, caixa.xyxy[0])  # Coordenadas da caixa delimitadora
            
            # Recortar a imagem usando a função recortar_imagem
            placa_detectada = recortar_imagem(imagem, (x1, y1, x2, y2))
            exibir_imagemOR(placa_detectada)
            cls = int(caixa.cls[0].numpy())  # Classe da detecção
            
            if cls == 0:
                lbl_classe.configure(text=f"Classe: Placa antiga")
            elif cls == 1:
                lbl_classe.configure(text=f"Classe: Placa Mercosul")
            
            # Processar e exibir a placa detectada
            processar_imagem(placa_detectada, cls)
            return

# Função para recortar a imagem da placa
def recortar_imagem(imagem, coordenadas):
    x1, y1, x2, y2 = coordenadas
    # Garantir que as coordenadas não saiam dos limites da imagem
    altura, largura, _ = imagem.shape
    x1 = max(0, x1)
    y1 = max(0, y1)
    x2 = min(x2, largura)
    y2 = min(y2, altura)

    # Realiza o recorte
    recorte = imagem[y1:y2, x1:x2]
    return recorte

# Exibir e processar a placa detectada
def processar_imagem(placa, classe):
    # Obter as dimensões da placa
    altura, largura = placa.shape[:2]
    #lbl_dimensoes.configure(text=f"Dimensões da Placa: {largura}x{altura}")  # Atualiza a label de dimensões
    
    if classe == 1:
        imagem_processada = preprocessamento_placa_mercosul(placa)
        if altura >= 38 and largura >=120:
            imagem_processada = cv2.resize(imagem_processada, None, fx=0.2, fy=0.2, interpolation=cv2.INTER_CUBIC)
            imagem_exibir = imagem_processada[9:-2, 9:-9]
            exibir_imagem(imagem_exibir)
        texto_placa = reconhecimento_placa_mercosul(imagem_processada)
        texto_placa = pos_processar_placa_mercosul(texto_placa)
        #lbl_resultado.configure(text=f"Placa Reconhecida: {texto_placa}")
        lbl_placa.configure(text=f"Placa: {texto_placa}")
        resultado = consultar_veiculo(texto_placa)
        print(resultado)

        if resultado is not None:
        # Atualiza os labels com as informações obtidas
            lbl_cor.configure(text=f"Cor: {resultado['cor']}")
            lbl_modelo.configure(text=f"Modelo: {resultado['modelo']}")
            lbl_ano.configure(text=f"Ano: {resultado['anoModelo']}")
            lbl_multas.configure(text=f"Multas: {resultado['multas']}")
            lbl_debito.configure(text=f"Débito: {resultado['debito']}")
            lbl_restricao.configure(text=f"Restrição: {resultado['restricao']}")
            lbl_situacao.configure(text=f"Situação: {resultado['situacao']}")
        else:
            # Exibe mensagem de erro se o veículo não for encontrado
            lbl_cor.configure(text="Cor: Não encontrado")
            lbl_modelo.configure(text="Modelo: Não encontrado")
            lbl_ano.configure(text="Ano: Não encontrado")
            lbl_multas.configure(text="Multas: Não encontrado")
            lbl_debito.configure(text="Débito: Não encontrado")
            lbl_situacao.configure(text="Situação: Não encontrado")
            lbl_restricao.configure(text="Restrição: Não encontrado")

    
    else:
        if altura > 90:
            placa = placa[35:-1, 2:-2] 
        else:
            placa = placa[10:-1, 2:-2] 
        imagem_processada = preprocessamento_placa_antiga(placa)
        imagem_processada = cv2.resize(imagem_processada, None, fx=0.2, fy=0.2, interpolation=cv2.INTER_CUBIC)
        exibir_imagem(imagem_processada)
        texto_placa = reconhecimento_placa_antiga(imagem_processada)
        texto_placa = pos_processar_placa_antiga(texto_placa)
        #lbl_resultado.configure(text=f"Placa Reconhecida: {texto_placa}")
        lbl_placa.configure(text=f"Placa: {texto_placa}")
        resultado = consultar_veiculo(texto_placa)

        if resultado is not None:
        # Atualiza os labels com as informações obtidas
            lbl_cor.configure(text=f"Cor: {resultado['cor']}")
            lbl_modelo.configure(text=f"Modelo: {resultado['modelo']}")
            lbl_ano.configure(text=f"Ano: {resultado['anoModelo']}")
            lbl_multas.configure(text=f"Multas: {resultado['multas']}")
            lbl_debito.configure(text=f"Débito: {resultado['debito']}")
            lbl_restricao.configure(text=f"Restrição: {resultado['restricao']}")
            lbl_situacao.configure(text=f"Situação: {resultado['situacao']}")
        else:
            # Exibe mensagem de erro se o veículo não for encontrado
            lbl_cor.configure(text="Cor: Não encontrado")
            lbl_modelo.configure(text="Modelo: Não encontrado")
            lbl_ano.configure(text="Ano: Não encontrado")
            lbl_multas.configure(text="Multas: Não encontrado")
            lbl_debito.configure(text="Débito: Não encontrado")
            lbl_restricao.configure(text="Restrição: Não encontrado")
            lbl_situacao.configure(text="Situação: Não encontrado")
            
# Exibição da imagem no tkinter

def exibir_imagemOR(imagem):
    height, width = imagem.shape[:2]
    scaling_factor = 2.5  # fator de escala, pode ser ajustado conforme necessário
    resized = cv2.resize(imagem, (int(width * scaling_factor), int(height * scaling_factor)))
    imagem_pil = Image.fromarray(resized)
    imagem_tk = ImageTk.PhotoImage(image=imagem_pil)

    lbl_imagem_original.configure(image=imagem_tk)
    lbl_imagem_original.image = imagem_tk
    
def exibir_imagem(imagem):
    imagem_rgb = cv2.cvtColor(imagem, cv2.COLOR_BGR2RGB)
    height, width = imagem_rgb.shape[:2]
    scaling_factor = 2.5  # fator de escala, pode ser ajustado conforme necessário
    resized = cv2.resize(imagem_rgb, (int(width * scaling_factor), int(height * scaling_factor)))
    imagem_pil = Image.fromarray(resized)
    imagem_tk = ImageTk.PhotoImage(image=imagem_pil)

    lbl_imagem.configure(image=imagem_tk)
    lbl_imagem.image = imagem_tk

# Limpar a interface
def limpar():
    lbl_imagem.configure(image="")
    lbl_imagem_original.configure(image="")
    #lbl_resultado.configure(text="Resultado: ")
    lbl_classe.configure(text="Classe: ")
    #lbl_dimensoes.configure(text="Dimensões da Placa: ")  # Limpa a label de dimensões
    lbl_placa.configure(text="Placa: ")
    lbl_ano.configure(text="Ano: ")
    lbl_cor.configure(text="Cor: ")
    lbl_modelo.configure(text="Modelo: ")
    lbl_restricao.configure(text="Restrição: ")
    lbl_situacao.configure(text="Situação: ")
    lbl_multas.configure(text="Multas: ")
    lbl_debito.configure(text="Débito: ")
    status_bar.config(text="Todos os campos foram limpos.")
    
def consultar_veiculo(placa):
    print(f"Veio a placa{placa}")
    
    url = f"http://localhost:3000/veiculo/{placa}"  # URL da API com a placa
    try:
        response = requests.get(url)  # Faz a requisição GET para a API

        if response.status_code == 200:
            veiculo = response.json()  # Converte a resposta em JSON
            return veiculo  # Retorna o dicionário com os dados do veículo
        elif response.status_code == 404:
            print("Veículo não encontrado.")
        else:
            print(f"Erro: {response.status_code} - {response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Erro ao conectar com a API: {e}")




# ---- Janela Principal ----
app = tk.Tk()
app.title("Reconhecimento de Placas Veiculares com YOLO e Tesseract")
app.geometry("1000x600")
app.config(bg="#f0f0f0")

# ---- Barra de Menu ----
menu_bar = tk.Menu(app)
menu_arquivo = tk.Menu(menu_bar, tearoff=0)
menu_arquivo.add_command(label="Carregar Imagem", command=carregar_imagem)
menu_arquivo.add_command(label="Limpar", command=limpar)
menu_arquivo.add_separator()
menu_arquivo.add_command(label="Sair", command=app.quit)
menu_bar.add_cascade(label="Arquivo", menu=menu_arquivo)
app.config(menu=menu_bar)

# ---- Toolbar ----
toolbar = tk.Frame(app, bd=1, relief=tk.RAISED, bg="#ddd")
toolbar.pack(side="top", fill="x")

btn_carregar = tk.Button(toolbar, text="Carregar Imagem", command=carregar_imagem)
btn_carregar.pack(side="left", padx=4, pady=4)

btn_limpar = tk.Button(toolbar, text="Limpar", command=limpar)
btn_limpar.pack(side="left", padx=4, pady=4)

# ---- Container principal (painéis + separator) ----
container = tk.Frame(app)
container.pack(side="top", fill="both", expand=True)

# ---- Painel esquerdo ----
frame_esquerdo = tk.Frame(container, width=400, height=600)
frame_esquerdo.pack(side="left", fill="both", expand=True)

# Texto e imagem da imagem original
lbl_texto_original = tk.Label(frame_esquerdo, text="Imagem original (YOLO)", font=("Helvetica", 14))
lbl_texto_original.pack(pady=10, anchor="n")

lbl_imagem_original = tk.Label(frame_esquerdo)
lbl_imagem_original.pack(pady=10, anchor="center")

# Texto e imagem da imagem pré-processada
lbl_texto_imagem = tk.Label(frame_esquerdo, text="Imagem pré-processada", font=("Helvetica", 14))
lbl_texto_imagem.pack(pady=10, anchor="n")

lbl_imagem = tk.Label(frame_esquerdo)
lbl_imagem.pack(pady=10, anchor="center")


lbl_classe = tk.Label(frame_esquerdo, text="Classe: ", font=("Helvetica", 14), anchor="w")
lbl_classe.pack(pady=5, fill="x")

"""lbl_dimensoes = tk.Label(frame_esquerdo, text="Dimensões da Placa: ", font=("Helvetica", 14), anchor="w")
lbl_dimensoes.pack(pady=5, fill="x")

lbl_resultado = tk.Label(frame_esquerdo, text="Resultado: ", font=("Helvetica", 14), anchor="w")
lbl_resultado.pack(pady=5, fill="x")"""

# ---- Separator no meio ----
separator = ttk.Separator(container, orient="vertical")
separator.pack(side="left", fill="y", pady=10)

# ---- Painel direito ----
frame_direito = tk.Frame(container, width=400, height=600)
frame_direito.pack(side="right", fill="both", expand=True)

lbl_placa = tk.Label(frame_direito, text="Placa: ", font=("Helvetica", 14), anchor="w")
lbl_placa.pack(pady=5, fill="x")

lbl_ano = tk.Label(frame_direito, text="Ano: ", font=("Helvetica", 14), anchor="w")
lbl_ano.pack(pady=5, fill="x")

lbl_cor = tk.Label(frame_direito, text="Cor: ", font=("Helvetica", 14), anchor="w")
lbl_cor.pack(pady=5, fill="x")

lbl_modelo = tk.Label(frame_direito, text="Modelo: ", font=("Helvetica", 14), anchor="w")
lbl_modelo.pack(pady=5, fill="x")

lbl_restricao = tk.Label(frame_direito, text="Restrição: ", font=("Helvetica", 14), anchor="w")
lbl_restricao.pack(pady=5, fill="x")

lbl_situacao = tk.Label(frame_direito, text="Situação: ", font=("Helvetica", 14), anchor="w")
lbl_situacao.pack(pady=5, fill="x")

lbl_multas = tk.Label(frame_direito, text="Multas: ", font=("Helvetica", 14), anchor="w")
lbl_multas.pack(pady=5, fill="x")

lbl_debito = tk.Label(frame_direito, text="Débito: ", font=("Helvetica", 14), anchor="w")
lbl_debito.pack(pady=5, fill="x")

# Guardar os labels em uma lista para facilitar o reset
info_labels = [
    lbl_classe, """lbl_dimensoes, lbl_resultado""", lbl_placa, lbl_ano, 
    lbl_cor, lbl_modelo, lbl_restricao, lbl_situacao, lbl_multas, lbl_debito
]

# ---- Footer (Status Bar) ----
status_bar = tk.Label(app, text="Pronto", bd=1, relief=tk.SUNKEN, anchor="w", padx=10)
status_bar.pack(side="bottom", fill="x")

app.mainloop()