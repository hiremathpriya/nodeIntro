const http = require('http');
let dt = require('./module.js');


http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type' :'text/html'});
    res.write("The date and Time are currently: " + dt.myDateTime() );
    res.end();




}).listen(3000);








/*const g = require("./module2.js").greeting;

console.log(g('priya'));

const serverURL = "localhost:3000/api";

const getAccounts = () => {

    const request = new XMLHttpRequest();
    request.open("GET", serverURL, true);
    request.send("name='hrishi'");
};*/

