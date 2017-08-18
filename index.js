/*
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 18-08-2017
 * |
 * | File Name:     index.js
 * +===============================================
 */
const app = require('http').createServer(handler);
const io = require('socket.io')(app);
const fs = require('fs')

app.listen(1820, function(){
  console.log('listening on *:1820');
});

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('my message', function(msg){
    console.log('my message: ' + msg);
    io.emit('my message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
