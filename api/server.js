const express = require("express");

const PostRouter = require("../posts/post-router.js");

const server = express();

server.use(express.json());

server.use("/api/posts", PostRouter);

// sanity check endpoint
server.get("/", (req, res) => {
  res.status(200).json({ api: "up & running" });
});

module.exports = server;
