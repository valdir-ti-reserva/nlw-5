import express, { response } from 'express'
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (req, resp) => {
  const items = await knex('items').select('*');
  
  //Transformando os dados
  const serializedItems = items.map(item => {
    return {
      id: item.id,
      name: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`
    };
  });
  
  return resp.json(serializedItems);
});

routes.post('/points', async (request, response) => {
  
  const { name, email, whattsapp, latitude, longitude, city, uf, items } = request.body;

  const transaction = await knex.transaction();

  const insertedIds = await transaction('points').insert({
    image: 'image-fake ',
    name, 
    email, 
    whattsapp, 
    latitude, 
    longitude, 
    city, 
    uf
  });

  const point_id = insertedIds[0];

  const PointItems = items.map((item_id: number) => {
    return {
      item_id,
      point_id
    }
  });

  await transaction('point_items').insert(PointItems);

  return response.json({success: true});

});

export default routes;
