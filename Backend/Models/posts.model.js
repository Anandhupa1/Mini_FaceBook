const mongoose = require("mongoose");

const postSchema = mongoose.Schema({

    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    description:{type:String,max:500},
    image:{type:String,default:"https://1.bp.blogspot.com/-vosbBrwAlsI/YYpwB1NbU-I/AAAAAAAANwo/7Z9sbZCZxM8Zy2nMDxH0it4p8q3NAHz9wCLcBGAsYHQ/s2048/Create%2Ba%2BNeon%2BNinja%2BPhoto%2BManipulation%2Bin%2BPhotoshop.jpg"},
    likes:{type:Array,default:[]}

},{timestamps:true,versionKey:false})

const PostModel  = mongoose.model("posts",postSchema);

module.exports={PostModel};