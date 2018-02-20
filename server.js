// Include Server Dependencies

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const dotenv = require('dotenv').config();
const mongoose = require("mongoose");
// import app from 'app/utils/API_Routes/routes'
// Require Schemas
const Blog = require("./server/models/blogModel");

// Create Instance of Express
const app = express();
const PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect(process.env.connectionstring);
const db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------
// Route to add to db
app.post("/api/saved", function(req, res) {
  const newBlog = new Blog (req.body);

  console.log(req.body);

  newBlog.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to get all saved weather
app.get("/api/saved", function(req, res) {

  Blog.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

//route to delete a single entry by the date it was entered
app.delete("/api/saved/", function(req, res) {
  
    let date = req.param("date");
  
    Weather.find({ date: date }).remove().exec(function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Deleted");
      }
    });
  });


// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------

app.listen(PORT, function() {
  console.log(`http://localhost:${PORT}`);
});

//https://app.meetsoci.com/p/80209/41722?mass_email_job_id=10948&email=mreed5168%40gmail.com&score=0