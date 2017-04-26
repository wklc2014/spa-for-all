var rimraf = require('rimraf');
var currentProject = require('./currentProject.js');
var path = require('path');
var cleanPath = path.join(currentProject, 'dist');

rimraf(cleanPath, function () {
    console.log('clean files success');
})

