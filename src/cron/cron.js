const mongoose = require('mongoose');

const connectMongo = async () => {
  const mongo = await mongoose.createConnection(process.env.MONGODB_URI);
  const dropCollection = await mongo.dropCollection('gamifications');
  console.log('Gamifications Droped', dropCollection)
}

export async function executeClearGamification(){
  await connectMongo();
}