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

 - 