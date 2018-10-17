const fortune = require('../lib/fortune.js');

exports.home = function(req, res) {
  res.render('home');
}

exports.about = function(req, res) {
  res.render('about', {
    fortune: fortune.getFortune()
  });
}

exports.success = function(req, res) {
  res.render('success');
}

exports.notFound = function(req, res) {
  res.status(404);
  res.render('404');
}

exports.error = function(req, res) {
  res.status(500);
  res.render('500');
}
