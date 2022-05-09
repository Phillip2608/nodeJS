let express = require('express');
const { route } = require('express/lib/application');

let routes = express.Router();

routes.get('/',(req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>HelloAA</h1>");
});

module.exports = routes;