const express = require('express');
const app = express();
app.use(express.static('main2'));
const path = require('path');
const usersRouter = require('./main2/js/mysqlrouter');

app.use(`/users`, usersRouter);

app.get('/', function(req, res) {
    const htmlPath = path.resolve(__dirname + '/index.html');
    console.log(htmlPath);
    res.sendFile(htmlPath);
});

app.listen(9090, ()=>{
    console.log("Server Running");
});