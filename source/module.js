const g = require("./module2.js").greeting;

console.log(g('priya'));

const serverURL = "localhost:3000/api";

const getAccounts = () => {

    const request = new XMLHttpRequest();
    request.open("GET", serverURL, true);
    request.send("name='hrishi'");
};