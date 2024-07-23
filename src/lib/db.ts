import { MongoClient } from "mongodb";

let globalWithMongo = global as typeof globalThis & {
  _mongoClient: Promise<MongoClient>;
};

if (!process.env.MONGODB_URI) {
  throw new Error("Invalid or missing environment variable for Mongodb URI");
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!globalWithMongo._mongoClient) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClient = client.connect();
  }

  clientPromise = globalWithMongo._mongoClient;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
