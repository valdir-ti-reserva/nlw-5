import express from 'express'
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (req, resp)=>{
  const items = await knex('items').select('*');
  
  //Transformando os dados
  const serializedItems = items.map(item => {
    return {
      name: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`
    };
  });
  
  return resp.json(serializedItems);
});

export default routes;
