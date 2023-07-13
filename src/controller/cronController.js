var cron = require('node-cron');

module.exports = {
  async executeClearGamification(mongoose){
    // cron.schedule('0 0 1 1-12 *', async () => {
    cron.schedule('* * * * *', async () => {
      console.log('Running...');
      const mongo = await mongoose.createConnection(process.env.MONGODB_URI);
      const dropCollection = await mongo.dropCollection('gamifications');
      console.log('Gamifications Droped', dropCollection)
    }, {
      scheduled: true,
      timezone: "America/Sao_Paulo"
    });
  }
}