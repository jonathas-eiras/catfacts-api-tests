# 🧪 Automação de Testes com Cypress e API Cat Facts

Projeto de automação de testes utilizando **Cypress**, **Cucumber (Gherkin)** e a **API pública do Cat Facts**, com foco em requisições para o endpoint (`/breeds`).

## 🚀 Objetivos

Automatizar os seguintes cenários via API:
- ✅ Requisição GET para `/breeds` sem parâmetros
- ❌ Requisição GET com parâmetros inválidos
- 🐾 Validação do conteúdo da resposta

## 🧰 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Allure Reports](https://docs.qameta.io/allure/)
- [Cat Facts API](https://catfact.ninja)
- Node.js (ambiente de execução)

## 📁 Estrutura dos Arquivos

<img width="247" alt="Screenshot 2025-06-08 at 11 34 37" src="https://github.com/user-attachments/assets/d53bc9e0-5f57-4de9-a380-54259432bb37" />


## 🧪 Como Executar os Testes localmente

- Instale as dependências:  
```bash
npm install
```
- Execute os testes:  
```bash
npx cypress open
```

## Visualizar relatório de execução no Actions

  - Clicar no link no artifacts do Actions.

    <img width="1154" alt="Screenshot 2025-06-08 at 11 23 32" src="https://github.com/user-attachments/assets/f32a98f6-9963-49a6-8080-276f14259021" />
 
 
