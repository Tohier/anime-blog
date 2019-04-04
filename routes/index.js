var express = require("express");
var router = express.Router();
var Posts = require("../db.json");

/* GET home page. */
router.get("/", function(req, res, next) {
  // res.render('index', { title: 'Express' });

  var data = {
    title: "Anime",
    blog: Posts,
    message: false
  };
  res.render("index", data);
});

module.exports = router;
  