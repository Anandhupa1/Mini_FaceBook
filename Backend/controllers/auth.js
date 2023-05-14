const jwt = require("jsonwebtoken");
require("dotenv").config();


const auth =async(req,res,next)=>{
//console.log("hi from auth")
let incToken = req.headers.authtoken;
//console.log(token)
await jwt.verify(incToken, process.env.key, function(err, decoded) {
    if(err){
        res.status(401).json({error:"Please login | use refresh token if logined"})}
    else{
       
    req.body.userId =decoded.userId;
    req.body.userEmail =decoded.userEmail;
    
    
    next()

    }
    
     });




}

module.exports={auth}