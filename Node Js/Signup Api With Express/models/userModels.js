const emailValidator = require("email-validator"); // use email validator package
const bcrypt = require('bcryptjs'); // use bcrypt package for hashing 
const mongoose = require("mongoose"); // use mongoose package

// Connect to database
const uri =
  "mongodb+srv://admin:12345@nodejscluster01.u7jbf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => {
    console.log(`Database Successfully Connect `);
  })
  .catch((e) => {
    console.log(e);
  });

// Create User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: function () {
      return emailValidator.validate(this.email);
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: true,
    minlength: 8,
    validate : function(){
      return this.confirmPassword === this.password;
    }
  },
});

// pre and post hooks
// before save occurs evennt in database

// userSchema.pre("save",function(){
//   console.log("before saving in database",this)
// })

// // after save occurs evennt in database

// userSchema.post("save",function(doc){
//   console.log("after saving in database"+doc)
// })

// remove hook home assignment

userSchema.pre('save',function(){
  this.confirmPassword = undefined;
})

// userSchema.pre('save',async function(){
//    let salt = await bcrypt.genSalt();
//    let hashedString = await bcrypt.hash(this.password,salt);
//    this.password = hashedString;
//    console.log(hashedString);
// })

const userModel = mongoose.model("userModel", userSchema);


// (async function createUser(){
//   let user ={
//     name : "Muhammad Hamza Farooq",
//     email : "mhamza202@gmail.com",
//     password : "sufyan",
//     confirmPassword  : "sufyan"
//   }

//   let data = await userModel.create(user);
//   console.log(data);
// })();


module.exports = userModel;