import { Router } from 'express';
import { getAllFlores, getFlorById, postFlor, putFlor, deleteFlor } from '../controllers/flores.controller.js';

const flor = Router();

flor.get('/', getAllFlores);

flor.get('/:id', getFlorById);

flor.put('/:id', putFlor); 
flor.post('/', postFlor);

flor.delete('/:id', deleteFlor);

export default flor;
