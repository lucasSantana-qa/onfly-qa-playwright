# ONFLY-QA-PLAYWRIGHT

Projeto de teste focado em **E2E (UI)** com Playwright em um sistema público e-commerce

---

## Stack

* Playwright (TypeScript)
* Page Object Model
* GitHub Actions (CI)

---

## Testes UI (Playwright)

* Adicionar produto ao carrinho
* Validar subtotal
* Remover produto do carrinho

---

## Executar testes local

```bash
npm install
npx playwright install
npx playwright test
```

Relatório:

```bash
npx playwright show-report
```

---

## Testes API (Postman)

* Collection e environment disponíveis em `/docs/postman`
* Variáveis compartilhadas configuradas para exportação
* Antes de executar o teste no postman, importar arquivos, e necessário gerar um token da api pública utilizada
e preencher o campo 'token' da environment 'hml'
* Json com resultados do teste na pasta `/docs/postman/results`

---

## CI

* Pipeline executa testes Playwright e gera relatório
