// Express Api
const express = require("express");
const cookieParser = require('cookie-parser');
const userRouter = require("./Routers/userRouter");
const authRouter = require("./Routers/authRouter");
const app = express();
const port = 8000;

//middleware
app.use(express.json()); // Global Middleware
app.use(cookieParser());

//mini app
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`server is upon running on port ${port}`);
});
