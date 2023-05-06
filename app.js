const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Server is up and running");
  res.end();
});

server.listen(5000);
