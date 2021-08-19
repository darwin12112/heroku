const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path=require("path");
var jsonfile = require('jsonfile');
require("dotenv").config();
const https = require('https');
const fs = require('fs');
// const bcrypt = require("bcryptjs");
// const Datastore = require("nedb");
// const jwt = require("jsonwebtoken");
const app = express();
// const db = {};
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
app.use(helmet());
app.use(cors());
const port = process.env.PORT || 3000;
const user = require("./routes/user");
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// *** config file *** //
const db = require("./dbConfig").mongoURI['development'];

// Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected: ", 'development'))
  .catch((err) => console.log(err));


// create our router
const router = express.Router();
// REGISTER OUR ROUTES -------------------------------
app.use("/", router);
app.use(express.static(path.resolve(__dirname, "build")));
// Use Routes
app.use("/api/", user);
app.get("/json/:file",function(req,res){

  var fileName = req.params.file;
  var file = path.normalize(__dirname + '/build/static/' + fileName+".json");
  // console.log('path: ' + file);

  jsonfile.readFile(file, function(err, obj) {
    if(err) {
      res.json({status: 'error', reason: err.toString()});
      return;
    }

    res.json(obj);
  });
});
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "build","index.html"));
});


//////////////end error handling middleware////////////////////////

app.listen(port, () => console.log(`Server is running on port ${port}!`));

module.exports = app;
