import express, { response } from 'express'

import PointsControllers from './controllers/pointsControllers';
import ItemsControllers from './controllers/itemsControllers';

const routes = express.Router();
const pointsControllers = new PointsControllers();
const itemsControllers  = new ItemsControllers();

routes.get('/items', itemsControllers.index);

routes.post('/points', pointsControllers.create);
routes.get('/points', pointsControllers.index);
routes.get('/points/:id', pointsControllers.show);

export default routes;
