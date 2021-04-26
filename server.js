var express = require("express");

//use the application off of express.
var app = express();

//define the route for "/"
app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/code/index.html");
});

app.get("/index.html", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/code/index.html");
});

app.get("/frontend/sign%20in/index.html", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/code/frontend/sign in/index.html");
});

app.get("/frontend/settings/index.html", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/code/frontend/settings/index.html");
});

app.get("/frontend/searchAllRecipes/index.html", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/code/frontend/searchAllRecipes/index.html");
});

app.get("/frontend/register/index.html", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/code/frontend/register/index.html");
});

app.get("/frontend/navigation%20bar/index.html", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/code/frontend/navigation bar/index.html");
});

//start the server
app.listen(3000);

console.log("Something awesome to happen at http://localhost:3000");

/*
let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./code/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
};

http.createServer(handleRequest).listen(3000);
*/
