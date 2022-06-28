// // we import this, ith as source code, http package
// const http = require('http');
// // this is a dot notation so its a method coming from an object
// //  this is a callback function
// const server = http.createServer((request, response) => {
//   console.log('new connection on port 3000, sending response...');
//   // console.log(request);
//   // console.log(response);
//   response.write('Hello world');
//   response.end();
// });
// // 80 not secure 443 is secure
// server.listen(3000);

const http = require('http');

const server = http.createServer((request, response) => {
  console.log(`Someone has requested ${request.url}`);

  if (request.url === '/') {
    response.write('Hello, world!');
    response.end();
  } else if (request.url === '/about') {
    response.write('My name is Izzy');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('404 Page');
    response.end();
  }
});

server.listen(3000);
