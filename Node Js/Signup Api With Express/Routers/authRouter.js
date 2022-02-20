const express = require("express");
const authRouter = express.Router();
const userModel = require("../models/userModels");


authRouter
  .route("/signup") // Path spceific Middleware
  .get(middleware1, getSingup, middleware2)
  .post(postSignup);

// authRouter
//   .route("/login") // Path spceific Middleware
//   .post(userLogin);

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

// async function userLogin(req, res) {
//   let data = req.body;
//   let user = await userModel.findOne({ email: data.email });

//   try {
//     if (data.email !== "") {
//       if (user) {
//         if (user.password === data.password) {
//           res.cookie('isLoggedIn',true, {httpOnly:true});
//           return res.json({
//             message: "User Logged In Successfully",
//             userDetails: data,
//           });
//         } else {
//           return res.json({
//             message: "Invalid Credential",
//           });
//         }
//       } else {
//         return res.json({
//           message: "User not found",
//         });
//       }
//     } else {
//       return res.json({
//         message: "User not found",
//       });
//     }
//   } catch (error) {
//     return res.status(500).json({
//       message: error.message,
//     });
//   }
// }
module.exports = authRouter;
