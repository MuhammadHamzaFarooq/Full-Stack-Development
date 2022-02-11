const express = require("express");
const app = express();

// mini app
const userRouter = express.Router();
userRouter
  .route("/")
  .get(getUsers)
  .post(postUser)
  .patch(updateUser)
  .delete(delelteUser);

userRouter.route("/getCookies").get(getCookies);

userRouter.route("/setCookies").get(setCookies);

// Query
app.get("/user", (req, res) => {
  console.log(req.query);
  res.send(users);
});

function setCookies(req, res) {
  //  res.setHeader('Set-Cookie','isLoggedIn=true');
  res.cookie("isLoggedIn", true, {
    maxAge: 1000 * 60 * 60 * 24,
    secure: true,
    httpOnly: true,
  });
  res.send("Cookie has been set");
}

function getCookies(req, res) {
  let cookies = req.cookies.isLoggedIn;
  console.log(cookies);
  res.send("Cookies recieved");
}

userRouter.route("/:username").get(getUserByID);

// params
function getUserByID(req, res) {
  console.log(req.params.username);
  console.log(req.params);
  res.send("user id received ");
}

async function getUsers(req, res) {
  let allUsers = userModel.find();
  res.json({
    message: "List of All Users",
    data: allUsers,
  });
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
async function updateUser(req, res) {
  console.log(req.body);

  let dataToBeUpdated = req.body;
  // for (key in dataToBeUpdated) {
  //   users[key] = dataToBeUpdated[key];
  // }

  let user = await userModel.findOneAndUpdate(
    { email: "mhamza2021999@gmail.com" },
    dataToBeUpdated
  );

  console.log(user);
  //update data in users obj
  res.json({
    message: "data update successfully",
    data: user,
  });
}

//to delete a data
async function delelteUser(req, res) {
  let data = req.body;
  let user = await userModel.findOneAndDelete(data);
  res.json({
    message: "data has been successfully deleted",
    data: user,
  });
}

function getCookies(req, res) {
  let cookies = req.cookies.isLoggedIn;
  console.log(cookies);
  res.send("Cookies recieved");
}

userRouter.route("/:username").get(getUserByID);

module.exports = userRouter;
