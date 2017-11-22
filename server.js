const serialport = require('serialport');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {path: '/'});

// Webserver
app.use(express.static('data'));
server.listen(8000);

// Read serial port
const sp = new serialport.SerialPort('/dev/tty.usbmodem1411');
sp.on('data', function(input){
    io.sockets.emit('data', input);
});
