// Declarations
var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var posts =   { body: "the stuff" };

// Middleware
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routing
app.get('/', function (req, res) {
    res.render('home');
    // res.send('<h1>I\'m Alive!</h1>');
});

app.get('/posts', function(req, res) {
    res.render('posts-index', {posts:posts});
});

app.get('/greetings/:name', function(req, res) {
    res.send('<h1>Greetings, ' + req.params.name + '</h1>');
});

app.get('/api/blahs', function(req, res) {
  res.json([
    { name: "Blah"},
    { name: "Blah"},
    { name: "Blah"}
  ]);
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// Server
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
