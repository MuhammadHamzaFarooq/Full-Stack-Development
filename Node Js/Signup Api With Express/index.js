// Express Api
const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const port = 8000;

//middleware 
app.use(express.json());


//mini app 
const authReducer = express.Router();

// baser url 
authReducer.use('')






app.listen(port,()=>{
   console.log(`server is upon running on port ${port}`);
})