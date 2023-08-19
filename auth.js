const jwt = require('jsonwebtoken')

function authenticate(req,res,next){
    let user=null;
    if(req.cookies.token){
        token=req.cookies.token;
        jwt.verify(token,process.env.SECRET_KEY,(err,decodedToken)=>{
            if(err){
                res.clearCookie("token");
                res.redirect("/");
            }
            console.log("Decoded TOken: ",decodedToken)
            user = decodedToken.name;
            console.log("AT HOME: ",decodedToken);
        });
    }
    req.user=user;
    next();
}

module.exports=authenticate;