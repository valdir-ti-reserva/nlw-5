## **NLW(New Level Week) - by RocketSeat**

### <u>***DIA 2***</u>



#### ***<u>APP COLETA</u>***

Back-end da aplicação



#### ***<u>DETALHES DO BACK-END</u>***

 - Rotas e recursos (Rota é o endereço completo da requisição e o recurso se refere a entidade que estamos acessando no sistema)

 - Métodos HTTP (São os tipos de requisições enviadas pelo sistema)

   1- GET: Buscar uma ou mais informações

   2- POST: Inserir uma nova informação no back-end

   3- PUT: Atualizar uma informação existente no back-end

   4- DELETE: Remover uma informação do back-end

   Ex:

   POST http://localhost:3333/users  -> Criar um usuário	

   GET  http://localhost:3333/users   -> Listar os usuários

   GET http://localhost:3333/users/5 -> Busca os dados do usuário pelo ID

 - Introduzindo ao Insomnia para realizar as requisições da API

 - Tipos de parâmetros 

   1- Request Params: Parâmetro que vem sempre junto na própria rota

   2- Query Params: Parâmetros opcionais que vão nas rotas, utilizados normalmente para filtros

   3- Body Params: Parâmetros utilizados na criação e edição de usuários

 - Qual banco de dados vamos utilizar?

   Exemplos: MySQL, Postgres, SQLite, MongoDB, SQL Server

   Vamos utilizar o banco relacional SQLite: database.sqlite

   Utilização http://knexjs.org/ como query builder

 - Criar o arquivo das rotas da aplicação

 - Instalar a lib do knex

 - Criar a pasta database dentro da pasta src, e dentro da pasta criada criar o arquivo connection.ts

 - Configurar para utilizar o banco de dados sqlite3 e instalar a lib correspondente 

 - Identificar as entidades (tabelas do banco de dados) da aplicação

   1- points (Pontos de coleta)

   	- image
   	- name
   	- email
   	- whattsapp
   	- latitude
   	- longitude
   	- city
   	- uf

   2- items (itens para a coleta)

   	- titulo
   	- image

   3- point_items (Relacionamento dos itens que um ponto coleta) (N para N)

   	- point_id
   	- item_id

- Criação das tabelas no banco de dados através das migrations (controla o histórico das tabelas no banco de dados)

- Criação das migrations dentro da pasta migrations que fica dentro da pasta database/migrations

- Após a criação das migrations e configurar o arquivo do knexfile.ts na raiz do projeto, rodar o seguinte comando: 

  - npx knex migrate:latest --knexfile knexfile.ts migrate:latest

- Funcionalidades da aplicação

  - Cadastro dos pontos de coleta
  - Lista de itens de coleta
  -  Listar pontos (filtro por estado/cidade/items)
  - Listar um ponto de coleta específico

- Preencher dados com seed.

  - Criar um arquivo chamado create_item.ts na pasta dentro de uma pasta chamada seed que fica dentro da pasta database

- Listando os itens da aplicação

- Criar um ponto de coleta e associar os itens que esse ponto trabalha

- Listar um ponto específico trazendo os tipos de items que ele trabalha

- Listar pontos pelo parâmetros de query