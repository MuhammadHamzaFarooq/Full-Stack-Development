// Express Api
const express = require('express');
const app = express();
const port = 8000;

//middleware 
app.use(express.json());  // Global Middleware 


//mini app 
const authReducer = express.Router();

// baser url 
app.use('/auth',authReducer);

authReducer.route('/signup')    // Path spceific Middleware 
.get(middleware1, getSingup,middleware2)
.post(postSignup)


// Middleware Function 
function middleware1(req,res,next){
  console.log("Middleware Function encounter");
  next();
}


function middleware2(req,res,next){
     console.log("Middleware2 is encountered");
     res.sendFile('./views/signup.html',{root:__dirname});
     console.log("Req and Res Cycle is ended !!");
}

function getSingup(req,res,next){
  console.log("getSignup Call");
 
  next();
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