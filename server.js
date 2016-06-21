//////////////////////////////////////////////////////////
//                      Requires                        //
//////////////////////////////////////////////////////////
var bodyParser      = require("body-parser");
var express         = require("express");
var path            = require("path");
var app             = express();

//Body Parser && Static Folder
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client/static"));

//Routes require
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

////////////////////////////////////////////////////////////
//                     Listen to Port                     //
////////////////////////////////////////////////////////////
app.listen(8000, function() {
    console.log("Hey, Listen! MiniStore on 8000");
})
