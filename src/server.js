const { server, mongoose } = require('./http');
const userWebsocket = require('./websocket/users');
// const cron = require('./controller/cronController');

const porta = process.env.PORT || 8081;

// cron.executeClearGamification(mongoose);

server.listen(porta);