var fs = require('fs');
var path = require('path');
var currentProject = require('./currentProject.js');
var entryPath = path.resolve(currentProject, 'src/entries');

var jsConfig = {};
var htmlConfig = {};

var isExist = fs.existsSync(entryPath);
if (isExist) {
    fs.readdirSync(entryPath).forEach(function(file) {
        var ext = path.extname(file);
        if (ext === '.html') {
            var htmlName = path.basename(file, '.html');
            htmlConfig[htmlName] = entryPath + '/' + file;
        } else if (ext === '.js') {
            var jsName = path.basename(file, '.js');
            jsConfig[jsName] = [entryPath + '/' + file];
        }
    })
} else {
    console.log('entry path is error');
}

module.exports = {
    js: jsConfig,
    html: htmlConfig
};
