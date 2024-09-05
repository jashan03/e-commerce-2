
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100,
  },
  image: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    minlength: 20,
    trim:true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  published: {
     type: Date, 
     default: Date.now ,
  },
});

// Export the Blog model
module.exports = mongoose.model("Blog", blogSchema);
