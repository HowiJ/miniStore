var mongoose    = require('mongoose');
var path        = require('path');
var fs          = require('fs');

var server      = 'mongodb://127.0.0.1/';
var database    = 'ministore';
mongoose.connect(server+database);
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if( file.indexOf('.js') >= 0 ) {
        require(models_path + '/' + file);
    }
})
