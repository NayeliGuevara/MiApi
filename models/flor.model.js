import mongoose from 'mongoose';

const florSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  caracteristica: {
    type: String,
    required: true
  },
  temporada: {
    type: String,
    required: true
  }
});

const Flor = mongoose.model('Flor', florSchema);
export default Flor;
