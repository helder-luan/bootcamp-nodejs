import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export class MongoDataBase {
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
    const client = new MongoClient(process.env.MONGODB_URL);
  
    await client.connect()
      .then(() => {
        console.log('NOSQL database connected!');
        this.instance = client.db(process.env.MONGODB_NAME);
      })
      .catch((err) => {
        console.log('Unable to connect to the database:', err);
      });
  }
}