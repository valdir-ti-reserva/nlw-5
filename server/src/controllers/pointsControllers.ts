import {Request, Response} from 'express';
import knex from '../database/connection';


class PointsControllers {

  async index(request: Request, response: Response){
    //Filtro por cidade, uf e items
    const { city, uf, items } = request.query;
    const parsedItems = String(items).split(',').map(item => Number(item.trim()));

    const points = await knex('points')
        .join('point_items', 'points.id', '=', 'point_items.point_id')
        .whereIn('point_items.item_id', parsedItems)
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('points.*');
    
    return response.json(points);
  }
  
  async show(request: Request, response: Response){
    const { id } = request.params;

    const point = await knex('points').where('id', id).first();

    if(!point){
      return response.status(400).json({ message: 'Point not found.'});      
    }

    const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');      

    return response.json({point, items});
  }

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

    //sempre que utilizar o transaction para várias inserções no banco de dados, deve-se fazer o commit no final
    await transaction.commit();
  
    return response.json({ 
      id: point_id,
      ...point
    });
  
  }

};

export default PointsControllers;