var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/js/app.js', function (req, res) {
    res.sendFile(__dirname + '/js/app.js');
});

app.get('/css/style.css', function (req, res) {
    res.sendFile(__dirname + '/css/style.css');
});

io.on('connection', function (socket) {
    socket.on('hit', function (msg) {
        socket.broadcast.emit('hi', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
