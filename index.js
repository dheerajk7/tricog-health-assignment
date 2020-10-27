const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//using router
app.use("/", require("./routes/index.js"));

//connecting to database
const db = require("./config/mongoose");

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server");
    return;
  }
  console.log("Server is running and up at port ", port);
  return;
});
