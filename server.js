const http = require("http");
const url = require("url");
const querystring = require("querystring");

const hrishi = {

    "accounts": [
        {
            "name": "Hrishi account 1",
            "balance": 450.00
        },
        {
            "name": "Hrishi Account 2",
            "balance": 2000

        }
    ]
};

const priya = {

    "accounts": [
        {
            "name": "Priya account 1",
            "balance": 450000.00
        },
        {
            "name": "Priya Account 2",
            "balance": 20000

        },
        {
            "name": "Priya Account 3",
            "balance": 200000

        }
    ]
};

const server = http.createServer(function(request, response){

    const rURL = url.parse(request.url);

    console.log('url ', rURL);

    const qString = querystring.parse(rURL.query);

    console.log('name is ', qString.name);

    response.setHeader('Content-Type', 'application/json');

    if (qString.name === 'hrishi') {

        response.write(JSON.stringify(hrishi));
    }

    if (qString.name === 'priya') {

        response.write(JSON.stringify(priya));
    }

    response.end();

});

server.listen(3000);

