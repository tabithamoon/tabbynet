### Build 
FROM node:alpine AS builder
WORKDIR /source

COPY package.json .
RUN yarn

COPY . .
RUN yarn build

# Run
FROM node:alpine AS runner
WORKDIR /app

COPY --from=builder /source/package.json .
COPY --from=builder /source/build .

EXPOSE 3000
CMD ["node", "index.js"]