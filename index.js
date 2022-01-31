const express=require('express');
const dotenv=require("dotenv");
//const mongoose =require('mongoose');
const bodyparser=require('body-parser')
const cookieParser=require('cookie-parser');
const cors=require('cors')
const router=require('./routes/userRoute')
const app=express();
// const corsOptions = {
//     origin: true, //included origin as true
//     credentials: true, //included credentials as true
// };

//app.use(cors(corsOptions));
dotenv.config({path:'./.env'});
//y
//require('./db');
//const User=require('./models/schema');
//  app.get('/',(req,res)=>{
//      res.cookie("test","abhi");
//      res.send('hy')
//  })
app.use(express.json())
 require('./db')
const port=5000;
app.use(bodyparser.json());
app.use(cookieParser());

app.use(cors());
// app.use(bodyparser.urlencoded({
//     extended:true
// }));
app.use('/users',router);

app.listen(port,()=>{
    console.log('server is running');
    
})