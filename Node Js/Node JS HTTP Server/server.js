// require module HTTP  from Node js
const http = require("http");

// require file system module form node js
const fs = require("fs");

// requier loadash module 
const _ = require('lodash');

const server = http.createServer((req, res) => {
  console.log("request has been made from browser");
  // console.log(req.method);
  // console.log(req.url);

 let randomNum =  _.random(0,110);
 console.log(randomNum);

  // res.setHeader('Content-Type','text/plain');
  res.setHeader("Content-Type", "text/html ");
  // res.write('<h1>Hello Chatbot Developer</h1>');
  // res.end();

  let path = "./views";
  switch (req.url) {
    case "/":
      path += "/index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "/about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301; // agar koi chz parmently move hogai hay to us ka status code hota hay 301
      res.setHeader('location','/about');
      res.end()
      break;
    default:
      path += "/404.html";
      res.statusCode = 404;
      break;
  }

  // path | call back function as an argument pass it readFile funtcion
  // fs.readFile('./views/index.html',(err,fileData)=>{
  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      res.write(fileData);
      res.end();
    }
  });
});

// Port | Host | Call Back Function
server.listen(3000, "localhost", () => {
  console.log("server is listening on port 3000");
});
