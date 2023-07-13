// var cron = require('node-cron');

const mongoose = require('mongoose');

module.exports = {
  async executeClearGamificationDrop(req, res){

    if(process.env.CRON_TOKEN === process.env.CRON_TOKEN_ENV){
      try{
        const mongo = await mongoose.createConnection(process.env.MONGODB_URI);
        const dropCollection = await mongo.dropCollection('gamifications');
  
        return res.send(`Dropped - ${dropCollection}`);
      }catch{
        return res.send(`error`);
      }
    }
    
    // const gamificationCollections = mongoose.connection.collections["gamifications"];

    // if(!gamificationCollections){
    //   return;
    // }

    // const gamificationDrop = await mongoose.connection.collections["gamifications"].drop();
    // console.log(gamificationDrop);

    // return res.send("droped");

    // // const mongo = await mongoose.createConnection(process.env.MONGODB_URI);
    // // const gamificationCollections = mongoose.connection.collections["gamifications"];

    // // if(!gamificationCollections){
    // //   return;
    // // }

    // // const test = await mongoose.connection.collections["gamifications"].drop()

    // // console.log(test);

    // // cron.schedule('0 0 1 1-12 *', async () => {
    // cron.schedule('* * * * *', async () => {
    //   // console.log('Running...');
    //   // const mongo = await mongoose.createConnection(process.env.MONGODB_URI);
    //   // const hasGamificationCollection = await mongo.getDatabases('gamifications')

    //   // console.log(hasGamificationCollection);

    //   // const dropCollection = await mongo.dropCollection('gamifications');
    //   // console.log('Gamifications Droped', dropCollection)

    //   const gamificationCollections = mongoose.connection.collections["gamifications"];

    //   if(!gamificationCollections){
    //     return;
    //   }

    //   const gamificationDrop = await mongoose.connection.collections["gamifications"].drop();
    //   console.log(gamificationDrop);
    // }, {
    //   scheduled: true,
    //   timezone: "America/Sao_Paulo"
    // });
  }
}