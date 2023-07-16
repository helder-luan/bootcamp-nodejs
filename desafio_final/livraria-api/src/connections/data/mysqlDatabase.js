import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export class MySqlDataBase {
  constructor() {
    this.instance = null;
  }

  static async getInstance() {
    if (!this.instance) {
      this.instance = await this.connect();
    }

    return this.instance;
  }

  static async connect() {
    const connection = new Sequelize({
      dialect: 'mysql',
      host: process.env.MYSQLDB_HOST,
      username: process.env.MYSQLDB_USER,
      password: process.env.MYSQLDB_PASS,
      database: process.env.MYSQLDB_NAME,
    });
  
    await connection.authenticate()
      .then(() => {
        console.log('SQL database connected!');
        this.instance = connection;
      })
      .catch(() => {
        console.error('Unable to connect to the database:', err);
      });
  }
}