var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});

  fs.readFile("index.html", "utf8", function(err, data){
    if (err) {
      return console.log(err);
    }
    res.write(data);
    res.end();
  });
  
});

server.listen(8080);
console.log("Server is listening on port 8080");