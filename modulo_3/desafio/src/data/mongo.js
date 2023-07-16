import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';

const dbName = 'pet-shop';


const client = new MongoClient(url);

export default async function connect() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  
  return db;
}