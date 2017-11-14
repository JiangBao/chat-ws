/**
 * entry
 */
const Koa = require('koa');
const app = new Koa();
const http = require('http').Server(app.callback());
const io = require('socket.io')(http);
const port = process.env.PORT || 8888;

io.on('connection', (socket) => {
  setInterval(() => {
    socket.emit('date-msg', new Date());
  }, 5000);

  socket.on('client-msg', (data) => {
    console.log(data);
  });
})

http.listen(port, () => {
  console.log(`server start success at ${port} port`);
});
