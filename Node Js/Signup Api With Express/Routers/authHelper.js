const JWT = require('jsonwebtoken');
const jwtKey = require('../secrets')


// let flag = true;   // user loggedIn or not
function protectRoutes(req,res,next){
    if(req.cookies.login){
      let isVerified = JWT.verify(req.cookies.login,jwtKey);
      if(isVerified){
          next()
      }
      else{
        return res.json(
            {
                message : 'User is not Verified'
            }
        )
      }
    }
    else{
      return res.json(
        {
          message:'operation not allowed'
        }
      )
    }
  }

  module.exports = protectRoutes;