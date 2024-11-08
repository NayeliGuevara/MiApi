import ejemplo from './ejemplo.routes.js';
import flor from './flor.routes.js';
import { Router } from 'express';

const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);
indexRoutes.use('/flor', flor);

export default indexRoutes;
