import {Request, Response} from 'express';
import knex from '../database/connection';


class PointsControllers {

  async create(request: Request, response: Response) {
  
    const { name, email, whattsapp, latitude, longitude, city, uf, items } = request.body;
  
    const transaction = await knex.transaction();
    
    const point = {
      image: 'image-fake ',
      name, 
      email, 
      whattsapp, 
      latitude, 
      longitude, 
      city, 
      uf
    };

    const insertedIds = await transaction('points').insert(point);
  
    const point_id = insertedIds[0];
  
    const PointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id
      }
    });
  
    await transaction('point_items').insert(PointItems);
  
    return response.json({ 
      id: point_id,
      ...point
    });
  
  }

};

export default PointsControllers;