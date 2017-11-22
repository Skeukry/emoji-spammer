const SerialPort = require('serialport');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// Webserver
app.use(express.static('data'));
server.listen(8000);

// Read serial port
const sp = new SerialPort('COM4', {highWaterMark: 4});
const parser = new SerialPort.parsers.Readline();
sp.pipe(parser);

let startVar = false;
let vars;
parser.on('data', n =>{
    n = parseInt(n);
    if(n<0){
        if(vars) io.emit('data', vars);
        startVar = true;
        vars = [];
        return;
    }

    vars.push(n);
});
