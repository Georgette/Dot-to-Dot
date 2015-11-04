var express = require('express')
var app = express()

//knows to look in web directory
app.use(express.static('.'))

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
})
