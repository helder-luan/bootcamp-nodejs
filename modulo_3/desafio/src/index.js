import express from 'express';
import propietarioRoutes from './routes/propietarioRoutes.js';
import animalRoutes from './routes/animalRoutes.js';

const app = express();

app.use(express.json());

app.use('/proprietario', propietarioRoutes);

app.use('/animal', animalRoutes);

app.listen(3000, () => {
  console.log("App is running on port http://localhost:3000")
});