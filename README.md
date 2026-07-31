# Adivinhe

Adivinhe é um jogo de palavras em português, desenvolvido com React, TypeScript e Vite. O objetivo é descobrir a palavra secreta com base em uma dica, testando letras uma por uma.

## 🎮 Como funciona

- O jogo escolhe uma palavra aleatória da lista disponível.
- O jogador recebe uma dica para ajudar a descobrir a palavra.
- A cada tentativa, uma letra é informada.
- Se a letra estiver na palavra, ela é marcada como correta.
- Se a letra já tiver sido usada, o jogo avisa o jogador.
- O jogo termina quando a palavra for descoberta ou quando o número máximo de tentativas for atingido.

## ✨ Funcionalidades

- Interface simples e responsiva
- Sistema de pontuação
- Registro de letras usadas
- Reinício do jogo a qualquer momento
- Mensagens de vitória e derrota

## 🛠️ Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS Modules

## ▶️ Como executar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse o projeto no navegador através da URL informada pelo Vite.

## 📦 Scripts disponíveis

- `npm run dev` — inicia o projeto em modo de desenvolvimento
- `npm run build` — gera a build de produção
- `npm run preview` — visualiza a build localmente

## 📁 Estrutura do projeto

```text
src/
  components/     # Componentes reutilizáveis da interface
  utils/          # Dados e utilidades do jogo
  App.tsx         # Componente principal da aplicação
  main.tsx        # Ponto de entrada do React
```
