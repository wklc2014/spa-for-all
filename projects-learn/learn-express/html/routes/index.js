const main = require('./main.js');

module.exports = function(app) {
  app.get('/', main.home);
  app.get('/success', main.success);
  app.use(main.notFound);
  app.use(main.error);
}