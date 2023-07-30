const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

app.get("/index",(req,res)=>{
    res.redirect('/');
});

app.get("/",function(req,res){
    // res.sendFile(__dirname + "/index.html");
    res.render("index",{user: null,active: "home"});
    
});

app.get("/events",function(req,res){
    // res.sendFile(__dirname+"/events.html");
    res.render("events",{user: null,active: "events"});
});

app.get("/login",function(req,res){
    // res.sendFile(__dirname + "/login.html");
    res.render("login",{user: null,active: "login"})
});

app.get("/signup",(req,res)=>{
    // res.sendFile(__dirname + "/signup.html");
    res.render("signup",{user: null,active: "login"});
});

app.get("/team",(req,res)=>{
    // res.sendFile(__dirname + "/team-card.html");
    res.render("team",{user: null,active: "team"});
})

app.get("/contact",(req,res)=>{
    // res.sendFile(__dirname + "/contact.html");
    res.render("contact",{user: null,active: "contact"});
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});