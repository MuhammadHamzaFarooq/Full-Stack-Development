// Express Api
const express = require('express');
const app = express();
const port = 8000;

//middleware 
app.use(express.json());


//mini app 
const authReducer = express.Router();

// baser url 
app.use('/auth',authReducer);

authReducer.route('/signup')
.get(getSingup)
.post(postSignup)

function getSingup(req,res){
  res.sendFile('./views/signup.html',{root:__dirname});
}

function postSignup(req,res){
    let obj = req.body;
     console.log(obj)
    res.send({
        message:"User Singup",
        data : obj
    });
}

app.listen(port,()=>{
   console.log(`server is upon running on port ${port}`);
})