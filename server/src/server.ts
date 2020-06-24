import express from 'express';

const app  = express();
const port = 3334;

app.get('/users', (request, response)=>{
  console.log('Listagem de usuários rodando na porta: ' + port);

  let users = [
    'Valdir',
    'Julia',
    'Lila'
  ]

  response.json(users);
});

app.listen(port);