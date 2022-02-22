const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/userModels");
const JWT = require('jsonwebtoken');
const jwtKey = require('../secrets')
authRouter
  .route("/signup") // Path spceific Middleware
  .get(middleware1, getSingup, middleware2)
  .post(postSignup);

authRouter.route("/login").post(loginUser);

async function loginUser(req, res) {
  try {
    let data = req.body;

    if (data.email) {
      let user = await userModel.findOne({ email: data.email });
      if (user) {
        //bycrpty --> compare
        if (user.password === data.password) {
          // res.cookie('isLoggedIn',true ,{httpOnly:true});
          let uniqueId = user['_id'];  // unique id 
          let jwt_Token = JWT.sign({payload : uniqueId},jwtKey);
          res.cookie('login',jwt_Token ,{httpOnly:true});


          return res.json({
            message: "user has Successfully LoggedIn",
            userDetails: data,
          });
        } else {
          return res.json({
            message: "Wrong Credentials",
          });
        }
      } else {
        return res.json({
          message: "User Not Found !!",
        });
      }
    } else {
      return res.json({
        message: "Empty Field Found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

// Middleware Function
function middleware1(req, res, next) {
  console.log("Middleware Function encounter");
  next();
}

function middleware2(req, res, next) {
  console.log("Middleware2 is encountered");
  res.sendFile("./views/signup.html", { root: __dirname });
  console.log("Req and Res Cycle is ended !!");
}

function getSingup(req, res, next) {
  console.log("getSignup Call");
  next();
}

async function postSignup(req, res) {
  let dataObj = req.body;
  let user = await userModel.create(dataObj);

  res.json({
    message: "User Singup",
    data: user,
  });
}

module.exports = authRouter;
