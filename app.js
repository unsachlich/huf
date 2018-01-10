var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

app.get('/', function(req, res){
    res.send('Rammstein knows how to play the flute');
});

app.get('/routing', function(req, res){
    res.send('Rammstein knows how to play the routing flute');
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
});