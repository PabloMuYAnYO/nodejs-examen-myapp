const app = require('../app');
const http = require('http');
const colors = require('colors');

const port = 3000;
app.set('port', port);

const server = http.createServer(app);

console.log(`Server en el puerto ${port}`.blue)
server.listen(port);