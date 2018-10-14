var http = require('http');
var fs = require('fs');
const url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(request.url,true).query;
    var title = queryData.id;
    if(_url == '/'){
      title = 'Welcome';
    }
    var bodyText = '';
    // console.log(queryData);
    // console.log(queryData.id);
    response.writeHead(200);

    bodyText = fs.readFileSync(`data/${title}`,'utf8');

      var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
          <li><a href="?id=HTML">HTML</a></li>
          <li><a href="?id=CSS">CSS</a></li>
          <li><a href="?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>${bodyText}  </p>
      </body>
      </html>

      `;
      console.log(template);
      // console.log(__dirname +'/'+ queryData.id);
      // response.end(fs.readFileSync(__dirname+'/'+ queryData.id));
      response.end(template);

      // if(queryData.id){
      //
      // } else {
      //   response.end(fs.readFileSync(__dirname+'/index.html'));
      // }
});
app.listen(80);
