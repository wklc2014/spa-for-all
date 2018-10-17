exports.pageLogin = function(req, res) {
  res.render('login', {
    csrf: 'CSRF token goes here',
  });
}

exports.login = function(req, res) {
  console.log('Form (from querystring): ' + req.query.form);
  console.log('CSRF token (from hidden form field): ' + req.body._csrf);
  console.log('Name (from visible form field): ' + req.body.name);
  console.log('Email (from visible form field): ' + req.body.email);
  res.redirect(303, '/success');
}
