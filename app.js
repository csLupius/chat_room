var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));
//
var ConnectionController = require('./Server/Controllers/ConnectionController');

io.on('connection',
    function (socket) {
        ConnectionController.IO = io;
        ConnectionController.Connect(socket);
    }
);
var port = process.env.PORT || 5000
http.listen(port,
    function writeToConsole() {
        console.clear();
        console.log('started at : ' + port)
    }
);
function _terminate ()
{
    console.log('Server Termination Handled');
}

process.on("exit", function _beforeExitListener(code){
    console.log("exit " + code) ;
});
process.on("SIGINT", _terminate);
process.on("SIGTERM", _terminate);