import {connect} from 'mongoose';
//import {MongoClient, ServerApiVersion} from 'mongodb';

const userName = "JohnnyDL";
const userPass = "ElAtaud24";
const cluster = "cluster0.td2pb.mongodb.net";
//const DATABASE = "punto-venta";

const CONNECTION_STRING = `mongodb+srv://${userName}:${userPass}@${cluster}/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
/* const client = new MongoClient(CONNECTION_STRING, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const database = await client.db(DATABASE);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    console.log(database.namespace);
  } catch(error){
    console.error(error);
  }
}

*/

export const run = async () =>{
  try{
    const db = await connect(CONNECTION_STRING);
    console.log(db.connection.name);
  }catch(error){
    console.error(error);
  }
}
