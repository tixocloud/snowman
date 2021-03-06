var app = require('express').createServer(),
    io = require('socket.io').listen(app),
    fs = require('fs');

app.listen(8080);

app.get('/', function( req, res ) {
    res.sendfile(__dirname + '/index.html');
});

app.get('/img/bg.png', function( req, res ) {
    res.sendfile(__dirname + '/img/bg.png');
});

app.get('/img/modal-gloss.png', function( req, res ) {
    res.sendfile(__dirname + '/img/modal-gloss.png');
});

app.get('/jslib/colors.js', function( req, res ) {
    res.sendfile(__dirname + '/jslib/colors.js');
});
app.get('/jslib/round1.js', function( req, res ) {
    res.sendfile(__dirname + '/jslib/round1.js');
});
app.get('/jslib/round2.js', function( req, res ) {
    res.sendfile(__dirname + '/jslib/round2.js');
});
app.get('/jslib/snowman.js', function( req, res ) {
    res.sendfile(__dirname + '/jslib/snowman.js');
});

app.get('/jslib/jquery.reveal.js', function( req, res ) {
    res.sendfile(__dirname + '/jslib/jquery.reveal.js');
});

app.get('/jslib/backbone-min.js', function( req, res ) {
    res.sendfile(__dirname + '/node_modules/backbone/backbone-min.js');
});

app.get('/jslib/underscore-min.js', function( req, res ) {
    res.sendfile(__dirname + '/node_modules/underscore/underscore-min.js');
});

app.get('/jslib/jquery-1.7.2.min.js', function( req, res ) {
    res.sendfile(__dirname + '/jslib/jquery-1.7.2.min.js');
});

// List all css files
app.get('/css/style.css', function( req, res ) {
    res.sendfile(__dirname + '/css/style.css');
});

app.get('/css/reveal.css', function( req, res ) {
    res.sendfile(__dirname + '/css/reveal.css');
});
// List all js files

io.sockets.on('connection', function( socket ) {
    socket.emit('news', { hello: 'world' });

    // Events for ipad
    socket.on('questionChosen', function( question ) {
        console.log(data);
    });

    socket.on('reset', function() {
        socket.broadcast.emit('reset');
    });

    socket.on('close', function(data) {
        console.log(data);
        socket.broadcast.emit('close', {'q': data['q']});
    });

    socket.on('open', function(data) {
        console.log('Open question: ' + data['q']);
        socket.broadcast.emit('open', {'q': data['q']});
    });

    socket.on('changeRound', function(data) {
        console.log('Changing round to ' + data['round']);
        socket.broadcast.emit('changeRound', {'round': data['round']});
    });
});
