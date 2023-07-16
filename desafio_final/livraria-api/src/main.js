import express from "express";
import dotenv from "dotenv";

import { MySqlDataBase } from "./connections/data/mysqlDatabase.js";
import { MongoDataBase } from "./connections/data/mongoDatabase.js";

import { ClienteRoute } from "./routes/clienteRoute.js";
import { LivroRoute } from "./routes/livroRoute.js";
import { VendaRoute } from "./routes/vendaRoute.js";
import { AutorRoute } from "./routes/autorRoute.js";

dotenv.config();

export class App {
  constructor() {
    this.app = express();

    this.init();
  }

  init() {
    this.app.use(express.json());

    Promise
      .all([
        MongoDataBase.connect(),
        MySqlDataBase.connect()
      ])
        .then(() => {
          console.log('Databases connected!');
        })
        .catch((err) => {
          console.log('Unable to connect to the databases:', err);
        });

    this.initRoutes();

    this.app.listen(process.env.PORT, "192.168.0.104", () => {
      console.log(`API rodando na porta ${process.env.EXPRESS_PORT}`);
    });
  }

  initRoutes() {
    this.app.get('/', (req, res) => {
      try {
        res.send('API rodando com sucesso!');
      } catch (error) {
        console.log(error);
      }
    });

    this.app.use('/cliente', ClienteRoute);
    // this.app.use('/livro', LivroRoute);
    // this.app.use('/venda', VendaRoute);
    // this.app.use('/autor', AutorRoute);
  }
}

