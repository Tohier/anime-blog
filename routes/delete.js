var express = require("express");
var router = express.Router();
var Posts = require("../db.json");

router.get("/", function (req, res, next) {
    console.log(req.params.postId);

    // make a post request to our database
    request({
        url: 'http://localhost:3004/posts' + req.params.postId,
        method: 'DELETE',

    },

    function(error, response, body) {
            var data = {
                title: "anime",
                posts: Posts,
                message: 'successfully removed'
            };
        res.redirect("..");
    }
)});