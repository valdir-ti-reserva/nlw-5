import express, { response } from 'express'

import PointsControllers from './controllers/pointsControllers';
import ItemsControllers from './controllers/itemsControllers';

const routes = express.Router();
const pointsControllers = new PointsControllers();
const itemsControllers  = new ItemsControllers();

routes.get('/items', itemsControllers.index);

routes.post('/points', pointsControllers.create);

export default routes;
