var app = require('express')();
var exphbs  = require('express-handlebars');
var _ = require('lodash');
var store = require("./store.js")();

app.engine('handlebars', exphbs({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
  store.getAllItems().then(function(items) {
    res.render('home', items);
  });
});

store.start();
app.listen(3000);