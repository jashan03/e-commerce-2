const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// POST route to create a new blog
router.post("/", async (req, res) => {
  try {
    const { title, image, content, author } = req.body;

    // Validate the required fields
    if (!title || !image || !content || !author) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create a new blog instance
    const newBlog = new Blog({
      title,
      image,
      content,
      author,
      published: new Date(), // Ensure field names match schema
    });

    // Save the blog to the database
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: "Error saving the blog", error });
    console.log(error);
  }
});

// GET route to retrieve all blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length === 0) return res.status(404).send("No blogs found");
    res.json(blogs);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

// GET route to retrieve a blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).send("Blog not found");
    res.json(blog);
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
