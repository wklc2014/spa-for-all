const main = require('./main.js');
const process = require('./process.js');

module.exports = function(app) {
  app.get('/', main.home);
  app.get('/about', main.about);
  app.get('/success', main.success);
  app.get('/login', process.pageLogin);
  app.post('/login', process.login);
  app.use(main.notFound);
  app.use(main.error);
}