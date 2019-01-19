/*
 * +===============================================
 * | Author:        Parham Alvani <parham.alvani@gmail.com>
 * |
 * | Creation Date: 18-08-2017
 * |
 * | File Name:     index.js
 * +===============================================
 */
const app = require('http').createServer(handler)
const io = require('socket.io')(app)
const fs = require('fs')
const path = require('path')

app.listen(1820, function () {
  console.log('listening on *:1820')
})

function handler (req, res) {
  fs.readFile(path.join(__dirname, '/index.html'),
    function (err, data) {
      if (err) {
        res.writeHead(500)
        return res.end('Error loading index.html')
      }

      res.writeHead(200)
      res.end(data)
    })
}

io.on('connection', function (socket) {
  console.log('new connection')
  socket.on('message', function (msg) {
    socket.emit('emessage', msg)
  })
})
