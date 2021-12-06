const express = require("express");
const app = express();
const cors = require("cors");
require("./db/index");

// require("dotenv").config();
app.use(cors());
app.use(express.json());

const todoRouter = require("./routers/routes/todos");
app.use(todoRouter);

const PORT = process.env.PORT || 5000;
 console.log(PORT);
app.listen(PORT, () => { 
  console.log(`server is on ${PORT}`); 
});
