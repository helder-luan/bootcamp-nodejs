import { fileURL, readFile, writeFile } from './providers/fileSystem.js';
import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import accountsRouter from './routes/accountRoute.js';
import logger from './providers/winston.js';
import { swaggerDocument } from './docs/doc.js';

const app = express();
app.use(express.json());

app.use(cors());

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/accounts', accountsRouter);

app.listen(7878, async () => {
   try {
    await readFile(fileURL)
      .then(_ => logger.info("API started"));
  } catch (error) {
    const initialJson = {
      nextId: 0,
      accounts: []
    }

    writeFile(fileURL, JSON.stringify(initialJson))
      .then(_ => logger.info("API started and file created"))
      .catch(err => logger.error(err.message));
  }
});