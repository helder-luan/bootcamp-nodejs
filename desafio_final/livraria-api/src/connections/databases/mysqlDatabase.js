import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const mySqlDb = new Sequelize({
  dialect: 'mysql',
  host: process.env.MYSQLDB_HOST,
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_PASS,
  database: process.env.MYSQLDB_NAME,
});

export class MySqlDataBase {
  constructor() {
    this.instance = null;
  }

  static async getInstance() {
    if (!this.instance) {
      await this.connect();
    }

    return this.instance;
  }

  async connect() {
    await mySqlDb.authenticate()
      .then(() => {
        console.log('SQL database connected!');
        this.instance = this.connection;
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });
  }
}