const serialport = require('serialport');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Webserver
app.use(express.static('data'));
server.listen(8000);

// Read serial port
const sp = new serialport.SerialPort('/dev/tty.usbmodem1411');
sp.on('data', function(input){
    console.log(input);
});

// Socket.io
io.on('connection', function(socket){
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function(data){
        console.log(data);
    });
});
