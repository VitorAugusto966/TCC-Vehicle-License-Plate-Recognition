# Trabalho de Conclusão de Curso - Reconhecimento de Placa de Veículos em Imagens

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white) ![YOLO](https://img.shields.io/badge/YOLO-FF0000?style=for-the-badge&logo=yolo&logoColor=white)

Este repositório contém o código desenvolvido para o meu **Trabalho de Conclusão de Curso (TCC)**, que tem como objetivo a **detecção e o reconhecimento de placas de veículos em imagens**. O projeto utiliza técnicas de **Visão computacional**, **Aprendizado de Máquina** e **Processamento de Imagens** para identificar e interpretar placas de veículos, com foco nos padrões de placas brasileiras, incluindo as placas do **Padrão Mercosul**.

## Tecnologias Utilizadas

O projeto é implementado utilizando as seguintes tecnologias:

- **Python** 🐍: Linguagem utilizada para o desenvolvimento da interface gráfica (GUI) com **Tkinter** e para o processamento de imagens com **OpenCV**.
- **JavaScript** 💻: Linguagem utilizada no desenvolvimento do back-end, utilizando **Node.js** e **Express**.
- **YOLO (You Only Look Once)**: Para a detecção das placas de veículos nas imagens.
- **OpenCV**: Para o pré-processamento das imagens (conversão para escala de cinza, remoção de ruídos, limiarização, etc.).
- **Tesseract OCR**: Para o reconhecimento óptico de caracteres (OCR) nas placas.
- **EasyOCR**: Para complementação do OCR em casos onde o Tesseract não é suficiente.
- **Scikit-Image** e **Pillow**: Para manipulação e aprimoramento das imagens.
- **Tkinter**: Para a interface gráfica (GUI) desenvolvida em Python, permitindo ao usuário interagir com o sistema de forma intuitiva.
- **Node.js** com **Express**: Para simular um servidor que fornece informações do veículo baseado no número da placa, com dois bancos de dados de veículos para consulta.

## Objetivo

O objetivo principal deste trabalho é:

1. **Detecção de placas veiculares** 🚗: Localizar a posição das placas dentro de uma imagem.
2. **Reconhecimento de caracteres** 🔠: Extrair e interpretar os caracteres das placas utilizando técnicas de OCR.
3. **Pré-processamento de imagens** 🖼️: Melhorar a qualidade das imagens de placas, removendo ruídos e realçando os caracteres.
4. **Interface gráfica** 🖥️: Desenvolver uma interface gráfica intuitiva para facilitar o uso do sistema.
5. **Simulação de dados do SENATRAN** 📊: Utilizar um servidor back-end em Node.js para simular uma consulta aos dados de veículos com base na placa informada.

## Funcionalidades

- Detecção de placas em imagens de diferentes qualidades.
- Reconhecimento de caracteres das placas, incluindo placas no padrão **Mercosul**.
- Suporte para imagens com ruídos e baixa qualidade.
- Interface gráfica simples desenvolvida com **Tkinter** para facilitar a interação com o sistema.
- Simulação de dados do **SENATRAN** via back-end em **Node.js** com **Express**.
