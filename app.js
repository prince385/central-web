const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const {signup,login} = require("./userControls.js");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

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

app.get("/",function(req,res){
    // res.sendFile(__dirname + "/index.html");
    // console.log(req.json());
    let user = null,token=null;
    if(req.cookies.token){
        token=req.cookies.token;
        try{
            const decodedToken = jwt.verify(token,process.env.SECRET_KEY);
            user = decodedToken.name;
            console.log("AT HOME: ",decodedToken);
        }catch{
            res.clearCookie("token");
            res.redirect("/");
        }
    }
    // res.cookie("token",token,{httpOnly:true});
    res.render("index",{user: user,active: "home"});
});

app.get("/events",function(req,res){
    // res.sendFile(__dirname+"/events.html");
    let user = null,token=null;
    if(req.cookies.token){
        token=req.cookies.token;
        user = jwt.verify(token,process.env.SECRET_KEY).name;
    }
    res.render("events",{user: user,active: "events"});
});

app.get("/contact",(req,res)=>{
    // res.sendFile(__dirname + "/contact.html");
    let user = null,token=null;
    if(req.cookies.token){
        token=req.cookies.token;
        user = jwt.verify(token,process.env.SECRET_KEY).name;
    }
    res.render("contact",{user: user,active: "contact"});
})

app.get("/team",(req,res)=>{
    // res.sendFile(__dirname + "/team-card.html");
    let user = null,token=null;
    if(req.cookies.token){
        token=req.cookies.token;
        user = jwt.verify(token,process.env.SECRET_KEY).name;
    }
    res.render("team",{user: user,active: "team"});
})

app.get("/login",function(req,res){
    // res.sendFile(__dirname + "/login.html");
    res.render("login",{user: null,active: "login"})
});

app.get("/signup",(req,res)=>{
    // res.sendFile(__dirname + "/signup.html");
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