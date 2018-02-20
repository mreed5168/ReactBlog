// Include the Axios library for HTTP requests
import axios from 'axios';
const moment = require('moment');

// Helper Functions
const API = {
// This will save new blogs to our database
  postSaved: function(blogtitle, blogbody, name) {
    let d = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    const newBlog = { title: blogtitle, author: 'Mike', body: blogbody, date: d};
    return axios.post("/api/saved", newBlog)
      .then(function(response) {
        console.log("axios results", response.data);
      });
  },

  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  deleteSaved: function(date) {
    // console.log(date);
    return axios.delete("/api/saved", {
      params: {
        "date":date
      }
    })
    .then(function(results) {
      // console.log("axios results", results);
      // return results;
    });
  },


};

// We export the helpers function
module.exports = API;
