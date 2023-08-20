const express = require('express');
const app = express();

const path = require('path');

app.get('/', function(req, res) {
    var htmlPath = path.resolve(__dirname + '/index.html');
    res.sendFile(htmlPath);
});

app.listen(9090, ()=>{
    console.log("Server Running");
});