
/*
 * GET home page.
 */

var ejs = require('ejs');
var fs = require('fs');

exports.index = function(req, res){

    var home = ejs.render(fs.readFileSync("views/home.ejs", "utf-8"))
    
    res.render('layout.ejs', { title: 'Express', 
                                partial : home,
                                stylesheets: []});
  
};

exports.ourwork = function(req, res){

    var home = ejs.render(fs.readFileSync("views/ourwork.ejs", "utf-8"))
    
    res.render('layout.ejs', { title: 'Express', 
                                partial : home, 
                                stylesheets: ['ourwork.css'] });
  
};

exports.whoweare = function(req, res){

    var home = ejs.render(fs.readFileSync("views/whoweare.ejs", "utf-8"))
    
    res.render('layout.ejs', { title: 'Express', 
                                partial : home,
                                stylesheets: ['whoweare.css']});
  
};
