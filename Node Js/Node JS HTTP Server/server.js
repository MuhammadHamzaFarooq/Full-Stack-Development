const http = require("http");
const port = 8000;
const fs = require('fs');
const _ = require('lodash');


//create server
const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req.url);

  res.setHeader("Conent-Type", "text/hmtl");
  // console.log('User is requet from our node js Http server');
  // res.write('<h1>First Node Js Server<h1/>');
  // res.end();

  let randomNumber = _.random(0,200);
  console.log(randomNumber);

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
      res.statusCode = 301;
      res.setHeader('location','/about');
      res.end();
      break;
    default :
      path += "/404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path,(err,fileData)=>{
      if(err){
          console.log(err);
      }
      else{
          res.write(fileData);
          res.end();
      }
  })
});

// server listen
server.listen(port, "localhost", () => {
  console.log(`server is upon running on port ${port}`);
});
