const express=require('express');
const mongo=require('./shared');
const getRouter=require('./router/hall')
const app=express();

app.use(express.json()); //inbuilt middleware //convert req body into json format
mongo.connect();

app.use('/users',getRouter);
app.listen('3001');



//Middleware
// app.use("/",(req,res,next)=>{
//     //res.send("Hi,welcome to our session");
//     next();
// })

// app.use("/3",(req,res,next)=>{
//    if('hi'==='hi'){
//        res.send('correct user')
//    }
//    else{
//        res.send('wrong user')
//    }
// })

// app.use("/users",(req,res,next)=>{
//     res.send({
//         name:'yyy',
//         age:23
//     });
// })
