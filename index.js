const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const cors = require('cors');

app.use(express.urlencoded());
app.use(cors());

//using router
app.use('/', require('./routes/index.js'));

//connecting to database
const dbConnection = require('./config/sqlconnection');

dbConnection
  .sync({ loggin: console.log })
  .then(function () {
    console.log('Database Connected Successfully');
  })
  .catch(function () {
    console.log('Error in connecting to Database');
  });

app.listen(port, function (err) {
  if (err) {
    console.log('Error in running server');
    return;
  }
  console.log('Server is running and up at port ', port);
  return;
});
