import knex from '../database/connection';
import {Request, Response} from 'express';


class ItemsControllers {

  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    
    //Transformando os dados
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        name: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      };
    });
    
    return response.json(serializedItems);
  }

};

export default ItemsControllers;