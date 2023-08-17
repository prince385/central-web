const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req,res)=>{
    const {username,password,email,roll,phone} = req.body;

    try{
        const user = await userModel.findOne({email: email});
        if(user){
            return res.status(400).json({msg: "User already exists"});
        }
        const user2 = await userModel.findOne({roll: roll});
        if(user2){
            return res.status(400).json({msg: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await userModel.create({
            username: username,
            password: hashedPassword,
            email: email,
            roll: roll,
            phone: phone
        });

        const token = jwt.sign({email:newUser.email,roll:newUser.roll,id:newUser._id},process.env.SECRET_KEY);
        res.status(200).json({user:newUser,token:token});
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"something went wrong..."});
    }
}

const login = async (req,res)=>{
    const {roll,password} = req.body;
    const user = await userModel.findOne({roll: roll});
    if(!user){
        return res.status(404).json({msg: "User doesn't exist"});
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
        return res.status(400).json({msg: "Invalid credentials"});
    }
    const token = jwt.sign({email:user.email,roll:user.roll,id:user._id},process.env.SECRET_KEY);
    res.status(200).json({user:user,token:token});
}

module.exports = {login,signup};