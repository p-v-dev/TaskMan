# TaskMan

API REST para gerenciamento de tarefas construída com NestJS e TypeScript.

## Features

- Autenticação JWT
- CRUD de tarefas
- Gerenciamento de status das tarefas
- Validação de dados com class-validator
- Arquitetura modular

## Requisitos

- Node.js v18+
- Yarn ou npm

## Instalação

```bash
# Clone o repositório
git clone https://github.com/p-v-dev/TaskMan.git
cd TaskMan

# Instale as dependências
yarn install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
JWT_SECRET=seu_secret_aqui
DATABASE_URL=sua_database_url
PORT=3000
```

## Executando

```bash
# Desenvolvimento
yarn start:dev

# Produção
yarn build
yarn start:prod
```

A API estará disponível em `http://localhost:3000`

## Endpoints

### Autenticação

**Registrar**
```http
POST /auth/signup
Content-Type: application/json

{
  "username": "usuario",
  "password": "senha123"
}
```

**Login**
```http
POST /auth/signin
Content-Type: application/json

{
  "username": "usuario",
  "password": "senha123"
}
```

Retorna:
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Tarefas

> Todas as rotas de tarefas requerem autenticação via header `Authorization: Bearer {token}`

**Listar tarefas**
```http
GET /tasks
```

Query params opcionais:
- `status`: Filtrar por status (OPEN, IN_PROGRESS, DONE)
- `search`: Buscar em título/descrição

**Criar tarefa**
```http
POST /tasks
Content-Type: application/json

{
  "title": "Nome da tarefa",
  "description": "Descrição da tarefa"
}
```

**Buscar tarefa por ID**
```http
GET /tasks/:id
```

**Atualizar status**
```http
PATCH /tasks/:id/status
Content-Type: application/json

{
  "status": "IN_PROGRESS"
}
```

Status válidos: `OPEN`, `IN_PROGRESS`, `DONE`

**Deletar tarefa**
```http
DELETE /tasks/:id
```

## Estrutura

```
src/
├── auth/              # Módulo de autenticação
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── jwt.strategy.ts
├── tasks/             # Módulo de tarefas
│   ├── tasks.controller.ts
│   ├── tasks.service.ts
│   └── dto/
└── main.ts
```

## Tecnologias

- NestJS
- TypeScript
- JWT (Passport)
- TypeORM
- class-validator

## Testes

```bash
# Testes unitários
yarn test

# Testes e2e
yarn test:e2e

# Coverage
yarn test:cov
```

## Licença

MIT
