const jwt = require('jsonwebtoken')

function authenticate(req,res,next){
    let user=null;
    if(req.cookies.token){
        token=req.cookies.token;
        jwt.verify(token,process.env.SECRET_KEY,(err,decodedToken)=>{
            if(err){
                res.clearCookie("token");
            }else{
                user = decodedToken.name;
            }
        });
    }
    req.user=user;
    next();
}

module.exports=authenticate;