const http = require('http');
const url = require('url');
const fs = require('fs');
const tools = require('./template');

var app = http.createServer(function (request, response) {
    var _url = url.parse(request.url,true);
    if(_url.path == '/favicon.ico'){
      return;
    }
    console.log(_url);
    var queryString = _url.query;

    response.writeHead(200);

    if(_url.path == '/'){
      queryString.id = "index";
    }

    if(queryString.id) {
      fs.exists("./data/"+queryString.id,function(exists){
        if(exists){
          var fileData = fs.readFileSync("./data/"+queryString.id);
          var rtnData = tools.makeTemplate(queryString.id,fileData);
          response.end(rtnData,"utf8");
        }
        else {
          response.writeHead(404, {"Content-Type": "text/plain"});
          response.end("ERROR File does not exist");
        }

      });
    }
    if(queryString.img) {
      fs.exists("./img/"+queryString.img,function(exists){
        if(exists){
          var fileData = fs.readFileSync("./img/"+queryString.img);
          response.end(fileData);
        }
        else { 
          response.writeHead(404, {"Content-Type": "text/plain"});
          response.end("ERROR File does not exist");
        }

      });
    }
});

app.listen(8902);
