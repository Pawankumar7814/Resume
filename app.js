 //All require modules
 let express = require('express');
 let http = require('http');
 const ejs = require('ejs');

 //creating application
 let app = express();

 //view engine
 app.set('view engine', 'ejs');
 //assign port number
 let port = 3600 | process.env.port;

 app.use("/img", express.static(__dirname + "/Public/Image"));

 //My routes
 app.get('/resume', (req, res) => {
     res.render('../views/index.ejs');
 })

 //Start http server
 http.createServer(app).listen(port, () => {
     console.log("Port number is " + port);
 })


 //1) npm init 2) npm i express 3) node app.js(FILE NAME) 4)