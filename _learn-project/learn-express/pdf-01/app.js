const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
require('./routes/index.js')(app);

// 设置 handlebars 视图引擎
const handlebars = require('express3-handlebars')
  .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});