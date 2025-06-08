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

cypress/
├── e2e/
│ └── features/
│    ├── breeds_happy.feature
│   ├── breeds_unhappy.feature
├── support/
  └── step_definitions/
│   └── cat-breed_api.js
│ └── e2e.js
│ └── commands.js
cypress.config.js
package.json


## 🧪 Como Executar os Testes localmente

- Instale as dependências:  
```bash
npm install


## Visualizar relatório de execução

    - Clicar no link no artifacts do Actions.  
 
