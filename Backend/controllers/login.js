const loginRouter = require("express").Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/user.model");


loginRouter.post("/",async(req,res)=>{
    let {email,password}=req.body;
    if(!email | !password){res.status(422).json({error:"Fill all the details"})}
    else{
    let userData = await UserModel.findOne({email});
    if(!userData){res.status(404).json({error:"user doesn't exists , please register"})}
    else{
    const val = await bcrypt.compare(password,userData.password);
    if(!val){res.status(401).json({error:"password doesn't match"})}
    else{
    //create and send token
    const token = jwt.sign({ userId:userData._id ,userEmail:userData.email}, process.env.key,{expiresIn: '2d'});
    const refreshToken = jwt.sign({ userId:userData._id ,userEmail:userData.email }, process.env.refreshKey,{expiresIn: '20d'});
    res.send({message : "login Successfull",authToken:token,refreshToken})
    }
    }
    }
})



//refresh token 

loginRouter.post("/refresh",async(req,res)=>{
    try{
    let refToken = req.headers.refreshtoken;
    console.log(process.env.refreshKey)
    await jwt.verify(refToken, process.env.refreshKey, function(err, decoded) {
        if(err){res.send("error in refreshing");console.log(err)}
        else{

        //create and send new token 
        const token = jwt.sign({ userId:decoded.userId ,userEmail:decoded.userEmail}, process.env.key,{expiresIn: '1d'});
        res.send({authToken : token});

        }
         });
    }catch(err){
        console.log(err);res.send(err);
    }


})






module.exports={loginRouter}