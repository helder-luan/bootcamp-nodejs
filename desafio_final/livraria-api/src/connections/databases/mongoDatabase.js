import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export const mongoDb = new MongoClient(process.env.MONGODB_URL);

export class MongoDataBase {
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
    await mongoDb.connect()
      .then(() => {
        console.log('NOSQL database connected!');
        this.instance = mongoDb.db(process.env.MONGODB_NAME);
      })
      .catch((err) => {
        console.log('Unable to connect to the database:', err);
      });
  }
}