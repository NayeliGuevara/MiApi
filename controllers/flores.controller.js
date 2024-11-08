import Flor from '../models/flor.model.js';
import mongoose from 'mongoose';

export const getAllFlores = async (req, res) => {
    console.log('Obteniendo todas las flores');
    
    try {
      const flores = await Flor.find();  
      
      if (!flores || flores.length === 0) {
        return res.status(404).json({
          msg: 'No se encontraron flores.'
        });
      }
  
      return res.status(200).json({
        flores
      });
      
    } catch (error) {
      console.error('Error al obtener las flores:', error);
      return res.status(500).json({
        msg: 'Hubo un error al obtener las flores, inténtelo de nuevo más tarde.'
      });
    }
};

export const getFlorById = async (req, res) => {
    console.log('FLOR POR ID');
  
    const id = req.params.id;
  
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'ID no válido' });
      }
  
      const flor = await Flor.findById(id);
  
      if (!flor) {
        return res.status(404).json({ msg: 'Flor no encontrada' });
      }
  
      return res.status(200).json({ flor });
    } catch (error) {
      return res.status(500).json({ msg: 'Error al obtener la flor' });
    }
};

export const postFlor = async (req, res) => {
    console.log('POST FLOR');
    const body = req.body;
    const flor = new Flor(body);
    try {
      const validationError = flor.validateSync();
      if (validationError) {
        const errorMessages = Object.values(validationError.errors).map(error => error.message);
        return res.status(400).json({
          error: errorMessages
        });
      }
      await flor.save();
      return res.status(201).json({
        flor
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al guardar la flor'
      });
    }
};

export const putFlor = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
  
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'ID no válido' });
      }
  
      const flor = await Flor.findByIdAndUpdate(id, body, { new: true, runValidators: true });
      if (!flor) {
        return res.status(404).json({ msg: 'Flor no encontrada' });
      }
      return res.status(200).json({ flor });
    } catch (error) {
      return res.status(500).json({ msg: 'Error al actualizar la flor' });
    }
};

export const deleteFlor = async (req, res) => {
    console.log('DELETE FLOR');
  
    const id = req.params.id;
  
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'ID no válido' });
      }
  
      const flor = await Flor.findByIdAndDelete(id);
  
      if (!flor) {
        return res.status(404).json({ msg: 'Flor no encontrada' });
      }
      return res.status(200).json({ msg: 'Flor eliminada', flor });
    } catch (error) {
      return res.status(500).json({ msg: 'Error al eliminar la flor' });
    }
};
