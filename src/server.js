import pino from 'pino-http';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { getEnvVar } from './utils/getEnvVar.js';
import notesRouter from './routers/notes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

dotenv.config();

const PORT = Number(getEnvVar('PORT', '4000'));

export const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(pino({ transport: { target: 'pino-pretty' } }));

  app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });

  app.use(notesRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
