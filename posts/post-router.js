const express = require("express");

// database access using knex
const db = require("../data/db-config.js");

const router = express.Router();

// view a list of posts
router.get("/", (req, res) => {
  // select * from posts
  db.select("*")
    .from("posts")
    .then((posts) => {
      res.status(200).json({ data: posts });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.get("/:id", (req, res) => {
  // select * from posts where id = req.params.id
  db("posts")
    .where("id", "=", req.params.id)
    .then((posts) => {
      res.status(200).json({ data: posts });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.post("/", (req, res) => {
  const postData = req.body;

  // validate the data BEFORE calling the database
  // IF the data is valid, then go to the database
  db("posts")
    .insert(postData, "id") // returns an array with the ID of the last record inserted
    .then((ids) => {
      res.status(201).json({ data: ids });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });

  // when using SQLite3 the warning: .returning() is not supported by sqlite3 & will not have any effect.
  // can be safely ignored
});

router.put("/:id", (req, res) => {
  const changes = req.body;

  // please validate before calling the database
  db("posts")
    .where({ id: req.params.id })
    .update(changes)
    .then((count) => {
      res.status(200).json({ data: count });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

router.delete("/:id", (req, res) => {});

module.exports = router;
