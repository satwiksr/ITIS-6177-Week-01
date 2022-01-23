var http = require('http')
var port = 3000
var server = http.createServer(function(req, res) {
    res.write('Hello World!')
    res.end()
    
})


server.listen(port, function(error) {
    if(!error) {
        console.log('server is listening on port ' + port)
    }

})