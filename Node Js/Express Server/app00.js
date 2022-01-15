const express = require('express');
const app = express();
const port = 8000;


app.get('/',(req,res)=>{
    res.send("Welcome in Express Server");
    res.sendFile('F:\Full-Stack-Development\Node Js\Express Server\views\index.html');
});

app.get('/about',(req,res)=>{

    res.sendFile('./views/about.html',{root:__dirname});
});

//Redirect 

app.get('/about-us',(req,res)=>{
   res.redirect('/about')
});

// 404 Page not fond route 
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname});
});


app.listen(port,()=>{
    console.log(`server is up on running port ${port}`);
});

