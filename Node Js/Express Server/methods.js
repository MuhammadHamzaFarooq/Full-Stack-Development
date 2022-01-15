const express = require('express');
const app = express();
const port = 6000;

// Middleware func -> post , front-end -> json
app.use(express.json());

let users = [
    {
        id :1 ,
        name : 'Muhammad Hamza Farooq'
    },
    {
        id :2 ,
        name : 'Muhammad Hammad Waheed'
    },
    {
        id :3 ,
        name : 'Mriza Ziyad Ahmed Beg'
    }
];



// Query
app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send(users);
});


app.get('/user',(req,res)=>{
   res.send(users);
});

app.post('/user',(req,res)=>{
    console.log(req.body);
    users = req.body;
    res.json(
        {
            message : 'data received successfully',
            user: req.body
        }
    )
});

// update -> patch
app.patch('/user',(req,res)=>{
   console.log(req.body);

   let dataToBeUpdated = req.body;
   for(key in dataToBeUpdated){
       users[key] = dataToBeUpdated[key];
   }

   //update data in users obj
   res.json({
        message : "data update successfully"
   });
});


//to delete a data 
app.delete('/user',(req,res)=>{
    users = {};
    res.json({
        message: "data has been successfully deleted"
    })
})

// params
app.get('/user/:username',(req,res)=>{
    console.log(req.params.username);
    console.log(req.params);
     res.send('user id received ');
});

app.listen(port,()=>{
    console.log(`Metohds Server is upon running on port ${port}`);
});
