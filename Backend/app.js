const express = require('express');
require("dotenv").config();
const helmet = require("helmet");
const morgan = require('morgan');
const {auth}=require("./controllers/auth")
const { connection } = require('./config/connection');
const { loginRouter } = require('./controllers/login');
const { regRouter } = require('./controllers/register');
const { postRouter } = require('./controllers/posts');
const cors = require('cors')
const app = express();
app.use(cors())
app.set('view engine', 'ejs');
app.use(express.static("./views/public"))
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());



app.get("/",auth,async(req,res)=>{
    res.render("index.ejs",{email:req.body.userEmail})
})
app.use("/users",regRouter);
app.use("/users/login",loginRouter);
app.use("/posts",postRouter);









app.listen(process.env.port,async()=>{
    try{
    await connection;
    console.log("connected to remote db")
    }
    catch(err){
        console.log("error | connection ++++++++++",err)
    }
    console.log(`server started @ http://localhost:${process.env.port}`)
})