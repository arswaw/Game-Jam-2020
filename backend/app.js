const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/controller.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(8080, function(){
  console.log('listening on *:8080');
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('move', function(msg) {
      console.info('This was called from the server', msg)
      io.emit('move', msg)
  })
  
  socket.on('onMouseDown', function(msg) {
    io.emit('onMouseDown')
  })
  
  socket.on('onMouseUp', function(msg) {
    io.emit('onMouseUp')
  })
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' })
io.on('connection', function(socket){
  socket.broadcast.emit('hi');
});

