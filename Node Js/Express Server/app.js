// Creating Node Js Server using Express  Framework
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Welcome in Express Server");
    res.sendFile('./views/index.html',{root:__dirname});
});

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root:__dirname});
    console.log('Request Successfully Handled');
});

// Redirect 
app.get('/about-me',(req,res)=>{
      res.redirect('/about');
});

// 404
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
})

app.listen(port,()=>{
    console.log(`server is upon running on ${port}`)
});