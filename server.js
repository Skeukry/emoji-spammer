const SerialPort = require('serialport');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {path: '/io'});

// Webserver
app.use(express.static('data'));
server.listen(8000);

// Read serial port
const sp = new SerialPort('COM4');
const parser = new SerialPort.parsers.Readline();

sp.pipe(parser);
parser.on('data', console.log);
