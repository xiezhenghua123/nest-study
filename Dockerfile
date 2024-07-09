# build stage
FROM node:22.4.0-alpine3.19 as build-stage
# 设置工作目录
WORKDIR /app  
COPY package.json .
# RUN npm config set registry https://registry.npmmirror.com/
RUN npm install pnpm -g
RUN pnpm install
COPY . .
RUN pnpm run build

# production stage
FROM node:22.4.0-alpine3.19 as production-stage
WORKDIR /app
COPY --from=build-stage /app/dist ./dist
COPY --from=build-stage /app/package.json /app/package.json
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g pnpm
RUN npm install pm2 -g
RUN pnpm install --production
EXPOSE 3000
CMD [ "pm2-runtime", "./dist/main.js" ]