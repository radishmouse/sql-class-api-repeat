
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const Coffee = require('./models/coffees');

const server = http.createServer(async (req, res) => {
    console.log(req);

    res.statusCode = 200;
    res.setHeader('Content-Type');
});