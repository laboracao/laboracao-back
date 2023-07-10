# PROJETO BETO

## Ambientes

- Backend (NodeJS)
- Frontend (React)
- CMS (HYGRAPH)
- DB (MONGO DB)

## Backend

Comandos para rodar o backend

```
npm install

npm start
```

Este comando irá rodar o backend em ambiente local

## Variáveis de ambiente

É necessário configurar arquivos de configuração com base nos ambientes disponíveis no arquivo package.json:

-.env.development
-.env.local
-.env.production

Esses arquivos possuirão as variáveis de ambiente para cada ambiente:

```
MONGO_DB_CONNECTION = conexão mongoDB
MONGODB_URI = Endereço do MongoDB
```

Como demonstrado no arquivo .env.example

## Frontend

Leia o README no repositório do <a href="https://github.com/laboracao/laboracao-front">frontend</a>.

## Banco de dados

Neste projeto é usado o Mongo DB.

É necessário criar uma conta e uma instância de banco de dados dentro do Mongo DB Atlas, e após esse processo, vincular as conexões geradas ao backend através do arquivo .env.

## CMS

Neste projeto, é usado o <a href="https://hygraph.com/">HYGRAPH CMS</a>. Um cms headless que fornece uma interface para gerenciamento de conteúdo dentro do projeto BETO.

Este CMS trabalha com GRAPHQL e gera API para serem consumidas.
A API deste projeto está disponibilizada em https://api-sa-east-1.graphcms.com/v2/cl514trr41c2c01ugbhr85p1h/master'.

Esse CMS gerencia os cadastros de exercícios dentro do PROJETO BETO.
