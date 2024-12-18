# API de Criação de Usuários com NestJS

Uma aplicação NestJS robusta para gerenciamento de criação de usuários com validação.

## Funcionalidades

- Criação de usuário com validação de dados
- Validação de entrada para:
  - Nome (mínimo 3 caracteres)
  - Email (formato válido)
  - CEP (exatamente 8 dígitos)

## Instalação

```bash
pnpm install
```

## Executando a Aplicação

**Modo desenvolvimento:**
```bash

pnpm run start:dev
```



**Modo produção:**
```bash
pnpm run start:prod
```

## Endpoints da API

**Criar Usuário**
```
POST /
Parâmetros do Body:
{
  "name": "texto (mín 3 caracteres)",
  "email": "valido@email.com",
  "cep": "12345678"
}
```

**Listar Usuários**
```
GET /
[
  {
  "id": "7ba94b19-218e-4976-82bb-6879d341781d",
  "name": "texto (mín 3 caracteres)",
  "email": "valido@email.com",
  "cep": "12345678",
  },
  {
  "id": "05e27436-0297-42c8-a764-104098cf0c46",
  "name": "texto (mín 3 caracteres)",
  "email": "valido2@email.com",
  "cep": "12345678",
  }
]

```

**Regras de Validação**

- **Nome**
  - Deve ser texto
  - Comprimento mínimo: 3 caractere-  s

- **Email**
  - Deve ser-  um formato de email válido

- **CEP**
  - Deve ter exatamente 8 dígitos
  - Formato string

