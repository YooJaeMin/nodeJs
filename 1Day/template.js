const fs = require('fs');
module.exports = {
  makeTemplate : function (title,bodyText) {
    var testFolder = "./data";
    var fileList = "";
    fs.readdirSync(testFolder).forEach(file => {
      if(file!="index"){
        fileList = fileList
                   + `<li><a href="?id=${file}">${file}</a></li>`;
      }
    });
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
        ${fileList}
      </ol>
      <h2>${title}</h2>
      <p>${bodyText}  </p>
    </body>
    </html>

    `;
    return template;
  }
}
