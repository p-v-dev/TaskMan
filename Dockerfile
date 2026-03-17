# ── Stage 1: build ──────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependências antes de copiar o código (cache eficiente)
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copia o restante e compila
COPY . .
RUN yarn build

# ── Stage 2: produção ────────────────────────────────────────
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Só instala dependências de produção
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production && yarn cache clean

# Copia apenas o build gerado
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main"]
