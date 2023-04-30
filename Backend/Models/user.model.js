const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema({
    userName : {type:String, required:true, min:3,max:20,unique:true},
    email    :{type:String, required:true,max:50,unique:true},
    password :{type:String, required:true,min:6},
    profilePic:{type:String,default:"https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png"} ,
    coverPic :{type:String,default:"https://media.istockphoto.com/id/1298834196/photo/abstract-exhibition-background-with-ultraviolet-neon-lights-glowing-lines.jpg?b=1&s=170667a&w=0&k=20&c=ZUmVS85ht3BkwC7ZTlEBmY70qV6p4zQks5MSZ8yWBRc="},
    followers:{type:Array,default:[]},
    following:{type:Array,default:[]},
    isAdmin : {type:Boolean,default:false},
    description:{type:String,max:50},
    city : {type:String,max:50},
    from : {type:String,max:50},
    relationShip:{type:Number} 





},{timestamps:true,versionKey:false});

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
     this.password = await bcrypt.hash(this.password,10);
     console.log("passwoed hashed")
    }
     next();
 });
 
const UserModel  =mongoose.model("user",userSchema);

module.exports={UserModel};
