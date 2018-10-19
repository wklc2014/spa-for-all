const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const lessMiddleware = require('less-middleware');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(lessMiddleware(path.join(__dirname, 'public', 'less'), {
  force: true,
  dest: path.join(__dirname, 'public')
}));
app.use(express.static(__dirname + '/public'));

require('./routes/index.js')(app);

// 设置 handlebars 视图引擎
app.engine('.hbs', expressHandlebars({
  defaultLayout: 'mainLayout',
  extname: '.hbs',
  layoutsDir: 'views/layouts/',
  partialsDir: 'views/partials/',
}));
app.set('view engine', '.hbs');

const port = app.get('port');
app.listen(port, function() {
  console.log(`Express started on http://localhost:${port}, press Ctrl-C to terminate.`);
});

// https://fkscsjsm04.jz.fkw.com/