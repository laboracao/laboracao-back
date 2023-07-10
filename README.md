# PROJETO BETO

## Ambientes

- Backend (NodeJS)
- Frontend (React)
- CMS (HYGRAPH)
- DB (MONGO DB)

## Instalação

Para instalar os projetos (frontend e backend) localmente, é necessário instalar:

- NodeJS: versão > 14.

Feita a instalação do Node, é necessário clonar cada um dos projetos no ambiente e rodar, dentro de cada projeto, o comando:

```
npm install
```

Este comando irá instalar todas as dependências necessárias para rodar os respectivos projetos.

## Backend

Comandos para rodar o backend

```
npm run dev
```

Este comando irá rodar o backend em ambiente local. Para cada tipo de ambiente, há um comando específico listado no arquivo package.json.

- npm run dev: Rodar projeto apontando para ambientes (banco de dados) de desenvolvimento;
- npm run prod: Rodar projeto apontando para ambientes (banco de dados) de produção;

Em ambiente local, o backend será disponibilizado em: <a href="http://localhost:8081">http://localhost:8081</a>

## Variáveis de ambiente

É necessário configurar arquivos de configuração com base nos ambientes disponíveis no arquivo package.json:

-.env.development
-.env.local
-.env.production

Esses arquivos possuirão as variáveis para cada ambiente:

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

Este banco de dados irá gerenciar os usuários, suas configurações de uso do BETO, e os exercícios gerados para cada um deles.

## CMS

Neste projeto, é usado o <a href="https://hygraph.com/">HYGRAPH CMS</a>. Um cms headless que fornece uma interface para gerenciamento de conteúdo dentro do projeto BETO.

Este CMS trabalha com GRAPHQL e gera API para serem consumidas.
A API deste projeto está disponibilizada em https://api-sa-east-1.graphcms.com/v2/cl514trr41c2c01ugbhr85p1h/master'.

Esse CMS gerencia os cadastros de exercícios dentro do PROJETO BETO.
