import express from 'express';

const app = express();
const port = 3333;

app.get('/users', (request, response)=>{
  console.log('Listagem de usuários rodando na porta: ' + port);

  response.json([
    'Valdir',
    'Julia',
    'Lila',
    'Billy'
  ]);
});

app.listen(port);