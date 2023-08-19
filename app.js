const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {signup,login} = require("./userControls.js");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const auth = require("./auth.js");

dotenv.config();
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
app.use(cookieParser());

app.get("/index",(req,res)=>{
    res.redirect('/');
});

app.get("/",auth,function(req,res){
    let user = null;
    user = req.user;
    res.render("index",{user: user,active: "home"});
});

app.get("/events",auth,function(req,res){
    let user = null;
    user = req.user;
    res.render("events",{user: user,active: "events"});
});

app.get("/contact",auth,(req,res)=>{
    let user = null;
    user = req.user;
    res.render("contact",{user: user,active: "contact"});
})

app.get("/team",auth,(req,res)=>{
    let user = null;
    user = req.user;
    res.render("team",{user: user,active: "team"});
})

app.get("/login",function(req,res){
    res.render("login",{user: null,active: "login"})
});

app.get("/signup",(req,res)=>{
    res.render("signup",{user: null,active: "login"});
});

app.get("/logout",(req,res)=>{
    res.clearCookie("token");    
    res.redirect("/");
})

app.post("/signup",signup)

app.post("/login",login)

mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    app.listen(3000,function(){
        console.log("Server started on port 3000");
    });
    console.log("Connected to MongoAtlas");
}).catch((err)=>{
    console.log("Error connecting to MongoAtlas... Are you connected to HP??");
    console.log(err);
});