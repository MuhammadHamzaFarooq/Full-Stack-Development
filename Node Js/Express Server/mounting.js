const express = require("express");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
const app = express();
const port = 6000;

// Middleware func -> post , front-end -> json
app.use(express.json());

let users = [
  {
    id: 1,
    name: "Muhammad Hamza Farooq",
  },
  {
    id: 2,
    name: "Muhammad Hammad Waheed",
  },
  {
    id: 3,
    name: "Mriza Ziyad Ahmed Beg",
  },
];

// mini app
const userRouter = express.Router();

// auth route mini app
const authRouter = express.Router();

//base route 
app.use('/auth',authRouter);

authRouter.route('/signup')
.get(getSignUp)
.post(postSignUp);




function getSignUp(req,res){
    res.sendFile('./public/signup.html',{root:__dirname});
}   


function postSignUp(req,res){
  let obj = req.body;
  console.log("backend "+JSON.stringify(obj));
  res.json({
    message:'user signup',
    data:obj
  })
}

// base route , route to use
app.use("/user", userRouter);

userRouter
  .route("/")
  .get(getUser)
  .post(postUser)
  .patch(updateUser)
  .delete(delelteUser);


userRouter.route("/:username")
.get(getUserByID)

// Query
app.get("/user", (req, res) => {
  console.log(req.query);
  res.send(users);
});

function getUser(req, res) {
  res.send(users);
}

function postUser(req, res) {
  console.log(req.body);
  users = req.body;
  res.json({
    message: "data received successfully",
    user: req.body,
  });
}

// update -> patch
function updateUser(req, res) {
  console.log(req.body);

  let dataToBeUpdated = req.body;
  for (key in dataToBeUpdated) {
    users[key] = dataToBeUpdated[key];
  }

  //update data in users obj
  res.json({
    message: "data update successfully",
  });
}

//to delete a data
function delelteUser(req, res) {
  users = {};
  res.json({
    message: "data has been successfully deleted",
  });
}

// params
function getUserByID(req, res) {
  console.log(req.params.username);
  console.log(req.params);
  res.send("user id received ");

}


app.listen(port, () => {
  console.log(`Metohds Server is upon running on port ${port}`);
});
