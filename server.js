const app = require('./server-config')

port = process.env.PORT || 8080;

app.listen(port)
console.log('listening on port ' + port)
