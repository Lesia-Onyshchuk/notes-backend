import pino from 'pino-http';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { getEnvVar } from './utils/getEnvVar.js';

dotenv.config();

const PORT = Number(getEnvVar('PORT', '4000'));

export const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(pino({ transport: { target: 'pino-pretty' } }));

  app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });

  app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
  });

  app.use((error, req, res, next) => {
    res.status(500).json({ message: 'Something went wrong...' });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
