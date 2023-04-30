const { UserModel } = require("../Models/user.model");
const {auth}=require("./auth")
const regRouter = require("express").Router();

//get
regRouter.get("/",async(req,res)=>{
    try{
    let data = await UserModel.find();
    res.send(data);
    }catch(err){
    console.log("err | user | get",err)
    }
})
//get individual User
regRouter.get("/:id",async(req,res)=>{
    let data = await UserModel.findById(req.params.id);
    res.send(data);
})

//post
regRouter.post("/register",async(req,res)=>{
try{
    let {userName, email,password}=req.body;
    if(!userName || !email || !password){res.status(422).json({error:"please fill all the details"})}
    else{
    let userExists = await UserModel.findOne({email});
    if(userExists ){res.status(403).json({error:"user already exists, please login"})}
    else{
    let userNameExists = await UserModel.findOne({userName});
    if(userNameExists){res.status(409).json({error:"userName allready taken"})}
    else{
    let newUser = new UserModel(req.body);
    let out = await newUser.save();
    res.send(out);
    }
    }
    }
}catch(err){
    console.log("errror | User | post",err)
}
})
//delete
regRouter.delete("/:id",async(req,res)=>{
try{
    let _id = req.params.id;
    let userExists = await UserModel.findById(_id);
    if(!userExists){res.status(404).json({error:"user doesn't exists"})}
    else{
    let out = await UserModel.findByIdAndDelete(_id);
    res.send(out)
    }
}catch(err){
    console.log("error | user | delete ",err)
}
})
//update
regRouter.patch("/:id",async(req,res)=>{
try{
    let userExists = await UserModel.findById(req.params.id);
    if(!userExists){res.status(404).json({error:"user doesn't exists"})}
    else{
    let _id = req.params.id;
    let out = await UserModel.findByIdAndUpdate({_id},req.body,{new:true});
    res.send(out);
    }
}catch(err){
    console.log("error | User | patch",err);res.status(400).json({error:err})
}
})
//put | highly used for updating or adding additional fields;
regRouter.put("/:id",async(req,res)=>{
    try{
        let userExists = await UserModel.findById(req.params.id);
        if(!userExists){res.status(404).json({error:"user doesn't exists"})}
        else{
        let _id = req.params.id;
        console.log(userExists)
        let updatedData = {...userExists._doc,...req.body}
        //console.log(updatedData)
        let out = await UserModel.findByIdAndUpdate({_id},updatedData,{new:true});
        res.send(updatedData);
        }
    }catch(err){
        console.log("error | User | patch",err);
    }
    })



//follow a user functionality
regRouter.put("/:id/follow",auth,async(req,res)=>{
    
    if(req.body.userId !==req.params.id){
    try{
    //___________________

     let currentUser = await UserModel.findById(req.body.userId)
     let user = await UserModel.findById(req.params.id);
     
     if(!user.followers.includes(req.body.userId)){
      await user.updateOne({$push:{followers:req.body.userId}});
      await currentUser.updateOne({$push:{following:req.params.id}});
      res.send("user has been followed")
     }else{res.status(403).json("you already follows this person")}

     
    //___________________
    }catch(err){res.status(500).json(err);console.log("err | follow | put",err)}
    }else{
        res.status(403).json({error:"You can't follow yourself"})
    }
})



//unfollow a user functionality
regRouter.put("/:id/unfollow",auth,async(req,res)=>{
    
    if(req.body.userId !==req.params.id){
    try{
    //___________________

     let currentUser = await UserModel.findById(req.body.userId)
     let user = await UserModel.findById(req.params.id);
     
     if(!user.followers.includes(req.body.userId)){
      await user.updateOne({$pull:{followers:req.body.userId}});
      await currentUser.updateOne({$push:{following:req.params.id}});
      res.send("user has been unfollowed")
     }else{res.status(403).json("you are not following this person")}

     
    //___________________
    }catch(err){res.status(500).json(err);console.log("err | follow | put",err)}
    }else{
        res.status(403).json({error:"You can't unfollow yourself"})
    }
})






module.exports={regRouter}