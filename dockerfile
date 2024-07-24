# Build container
FROM node:20.16.0-alpine as builder

# Enable Corepack
RUN corepack enable

# Cartella della webapp
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --shamefully-hoist

# Build production
COPY . ./
RUN pnpm run build

# Final production container
FROM node:20.16.0-alpine as runtime

USER node

WORKDIR /nuxt

COPY --link --from=builder /usr/src/app/.output/  ./.output
COPY --link --from=builder /usr/src/app/public ./public

EXPOSE 3000

ENTRYPOINT [ "node", ".output/server/index.mjs" ]
