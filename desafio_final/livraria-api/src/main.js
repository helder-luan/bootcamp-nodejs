import express from "express";
import dotenv from "dotenv";

import { MySqlDataBase } from "./connections/databases/mysqlDatabase.js";
import { MongoDataBase } from "./connections/databases/mongoDatabase.js";

import ClienteRoute from "./routes/clienteRoute.js";
import AutorRoute from "./routes/autorRoute.js";
import LivroRoute from "./routes/livroRoute.js";

dotenv.config();
export class App {
  constructor() {
    this.app = express();
    this.mySqlDb = null;
    this.mongoDb = null;
    this.init();
  }

  async init() {
    this.app.use(express.json());

    this.mySqlDb = new MySqlDataBase();
    this.mongoDb = new MongoDataBase();

    await Promise.all([
      this.mongoDb.connect(),
      this.mySqlDb.connect()
    ])
      .then(() => {
        console.log('Databases connected!');
      })
      .catch((err) => {
        console.log('Unable to connect to the databases:', err);
      });
      

    this.initRoutes();

    this.app.listen(process.env.EXPRESS_PORT, process.env.EXPRESS_IPMAQUINA, () => {
      console.log(`API rodando na porta ${process.env.EXPRESS_PORT}`);
    });
  }

  initRoutes() {
    this.app.get('/', (req, res) => {
      res.send('API rodando com ExpressJS');
    });

    this.app.use('/cliente', ClienteRoute);
    this.app.use('/livro', LivroRoute);
    // this.app.use('/venda', VendaRoute);
    this.app.use('/autor', AutorRoute);
  }
}

