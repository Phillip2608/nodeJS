const express = require('express');

let app = express();

app.get('/',(req, res) => {
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>HelloAA</h1>");
});

app.get('/users',(req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json({
        users:[{
            name: 'Calanguinho',
            email: 'calanguinho@calangin.com',
            id: 1
        }]
    });
});

app.listen(3000, '127.0.0.1', () =>{

    console.log("Servidor rodando!");

});