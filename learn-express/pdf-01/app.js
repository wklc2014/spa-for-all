var express = require('express');
var fortune = require('./lib/fortune.js');
var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// 设置 handlebars 视图引擎
var handlebars = require('express3-handlebars')
  .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.render('home');
});
app.get('/about', function(req, res){
  res.render('about', { fortune: fortune.getFortune() });
});

app.get('/headers', function(req,res){
  res.set('Content-Type','text/plain');
  var s = '';
  for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
  res.send(s);
});

// 定制404 页面
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

// 定制500 页面
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});