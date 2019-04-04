var express = require("express");
var router = express.Router();
var Posts = require("../db.json");
var request = require("request");

// GEt the create page
router.get('/', function(req,res,next){
    res.render('create', {
        title:'Create page'
    });
});

// post a create
router.post('/', function(req,res,next){
    var posts = Posts.posts;
    // get the id of the last post
    var id = Posts[Posts.length-1].id;
    // 
    id = Number(id)+1;
    
    // getting the date 
    var newDate = new Date();
    
    // getting the date format
    var date = '${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear}';

    // get the content 
    var content = req.body.content;
    
    // text is used for the description
    // turns the object into a string
    var text = JSON.stringify(conten);

    // description var
    var description;
    description = text.charAt(1);

    // gets the character or char from the string 
    for(var i = 2; i < 200; i++) {
        description += text.charAt(i);
    }

    // posts request
    request({
        url: 'localhost:8080',
        method: Posts,
        form: {
            id: id,
            date: date,
            title: req.body.title,
            image: req.body.image,
            description: description + '...</p>',
            content: content,
            author: req.app.locals.user,
        },
        function (error,response,body) {
            res.render('index',{message: 'Successfully Added'});
        }
    })

        res.redirect('..');
        module.exports = router;
})