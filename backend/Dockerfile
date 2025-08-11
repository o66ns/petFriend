FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install -g typescript
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
COPY --from=build /app/package*.json ./
RUN npm install --production
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]