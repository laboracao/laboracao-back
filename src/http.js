const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.set('view engine', 'ejs');
app.use(cors({
  origin: "*"
}));
const server = http.Server(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
});

mongoose.connect(process.env.MONGODB_URI, {
// mongoose.connect('mongodb://root:root@mongo:27017/beto?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let interval;

io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

// app.use(function(req, res, next) {
//     // console.log(req.url);
//     // console.log(req.method);
//     interceptor(req, res);
//     next();
// });

app.use(express.json());
app.use(routes);

module.exports = { server, io, mongoose };