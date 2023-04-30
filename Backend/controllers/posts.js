const { PostModel } = require("../Models/posts.model");
const { UserModel } = require("../Models/user.model");
const {auth}= require("./auth")
const postRouter = require("express").Router();

//create a post
// get all post 
// get a post
//update a post
//delete a post
//like a post
//unlike a post



//create a post
postRouter.post("/",auth,async(req,res)=>{
try{
let newPost = new PostModel(req.body);
let out =await newPost.save();
res.send(out);
}catch(err){
console.log("error | post | post",err);
res.send(500);
}

})
//get a post
postRouter.get("/",async(req,res)=>{
    try{
    let data = await PostModel.find();
    res.send(data);
    }catch(err){console.log("posts | GETallposts ",err)}
})
//create a post by id
postRouter.get("/:id",auth,async(req,res)=>{
    try{
    let data = await PostModel.findById(req.params.id);
    res.send(data);
    }catch(err){console.log("posts | GETallposts ",err)}
})
//update| put
postRouter.put("/:id",auth,async(req,res)=>{
    try{
    let postId = req.params.id;
    let post = await PostModel.findById(postId);
    if(post.userId ==req.body.userId){
    let updatedData = {...post._doc,...req.body};
    
    let out =await PostModel.findByIdAndUpdate(postId,updatedData,{new:true})
    res.send(out)
    }else{res.status(401).json("you dont have access ")}
    }catch(err){console.log("posts | put ",err)}
})
//delete a post
postRouter.delete("/:id",auth,async(req,res)=>{
    try{
    let postId = req.params.id;
    let post = await PostModel.findById(postId);
    if(post.userId ==req.body.userId){
    await PostModel.findByIdAndDelete(postId);
    res.send("post deleted successfully")
    }else{res.status(401).json("you dont have access ")}
    }catch(err){console.log("posts | delete ",err)}
})



//like and unlike a post 
postRouter.put("/:id/like",auth,async(req,res)=>{
    try{
    let postId = req.params.id;
    let post = await PostModel.findById(postId);
    if(!post.likes.includes(req.body.userId)){
    await post.updateOne({$push:{likes:req.body.userId}});
    let out =await PostModel.findById(postId);
        res.send(out)}
    else{
        await post.updateOne({$pull:{likes:req.body.userId}})
        res.status(200).json("Post unliked ")
    }
   
    }catch(err){console.log("posts | put ",err)}
})


//timeline data 
postRouter.get("/:id/timeline",auth,async(req,res)=>{
    
   try{
    let currentUser = await UserModel.findById(req.body.userId);
    //users posts
    let userPosts = await PostModel.find({userId:req.body.userId});
    //res.send(userPosts)
    //users followers posts
    let friendsPosts = await Promise.all(
        currentUser.following.map((friendId)=>{
           return PostModel.find({userId:friendId});
        })
    )
    //response
    res.json(userPosts.concat(...friendsPosts))


    }catch(err){console.log("posts | GETallposts ",err)}
 })


module.exports={postRouter}