# Manual de Treinamento - Slides

Este projeto exibe um manual de slides interativo para treinamento de colaboradores, com opção de baixar o conteúdo em PDF.

## Pré-requisitos

- Node.js instalado
- npm instalado

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/enzomc86/Avalia-o-n-vel-1.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd Avalia-o-n-vel-1
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Como rodar o projeto

1. Inicie o servidor:
   ```sh
   npm start
   ```
2. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

## Gerar PDF

- Clique no botão "Baixar PDF" na página para baixar o manual em PDF.

## Estrutura

- `index.html`: Página principal dos slides
- `server.js`: Servidor Express e geração do PDF
- `assets/`: Pasta para arquivos adicionais

## Observações

- O PDF é gerado a partir do conteúdo dos slides, com formatação otimizada para impressão.
- Para personalizar os slides, edite o arquivo `index.html`.

---

Dúvidas ou sugestões? Abra uma issue no repositório!
