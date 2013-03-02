
/*
 * GET home page.
 */

var ejs = require('ejs');
var fs = require('fs');
var _ = require('underscore'); 

var links = {
    
    'whoweare': {path: '/whoweare', active: false, content: 'Who we are'},
    'ourwork' : {path: '/ourwork', active: false, content: 'Our Work'},
    'contact' : {path: '/contactus.html', active: false, content: 'Contact'} 
};

exports.index = function(req, res){
    
    console.log(links);

    var home = ejs.render(fs.readFileSync("views/home.ejs", "utf-8"))
    
    res.render('layout.ejs', { title: 'Express', 
                                partial : home,
                                links: links,
                                _ : _,
                                stylesheets: []});
  
};

exports.ourwork = function(req, res){

    var home = ejs.render(fs.readFileSync("views/ourwork.ejs", "utf-8"))
    links['whoweare'].active = false; 
    links['ourwork'].active = false; 
    links['contact'].active = false;       
   
    links['ourwork'].active = true; 
    res.render('layout.ejs', { title: 'Express', 
                                partial : home, 
                                links: links,
                                _ : _,
                                stylesheets: ['ourwork.css'] });
  
};

exports.whoweare = function(req, res){

    var home = ejs.render(fs.readFileSync("views/whoweare.ejs", "utf-8"))
    
    links['whoweare'].active = false; 
    links['ourwork'].active = false; 
    links['contact'].active = false;      
    links['whoweare'].active = true; 
    res.render('layout.ejs', { title: 'Express', 
                                partial : home,
                                links: links,
                                _ : _,
                                stylesheets: ['whoweare.css']});
  
};
