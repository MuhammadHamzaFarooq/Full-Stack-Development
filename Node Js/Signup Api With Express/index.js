// Express Api
const express = require('express');
const app = express();
const port = 8000;
const mongoose = require('mongoose');

// Connect to database 
const uri = "mongodb+srv://admin:12345@nodejscluster01.u7jbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri).then(()=>{
  console.log(`Database Successfully Connect `);
}).catch((e)=>{
  console.log(e)
});


// Create User Schema 

const userSchema = new mongoose.Schema(
  {
    name : {
      type : String,
      required:true
    }
    , 
    email:{
      type : String,
      required:true,
      unique:true
    },
    password:{
      type : String,
      required:true,
      minlength:8
    },
    confirmPassword:{
      type : String,
      required:true,
      minlength:8
    }
  }
)

const userModel = mongoose.model('userModel',userSchema);


(async function createUser(){
  let user ={
    name : "Muhammad Hamza Farooq",
    email : "mhamza202@gmail.com",
    password : "sufyan",
    confirmPassword  : "sufyan"
  }

  let data = await userModel.create(user);
  console.log(data);
})();



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