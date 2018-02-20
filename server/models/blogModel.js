const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  body: {
    type: String
  },
  date: {
    type: String, 
  }
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
