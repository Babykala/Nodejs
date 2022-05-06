const mongo=require('../shared');
const {ObjectId}=require('mongodb');

//Read
module.exports.getBook=async (req,res,next)=>{
    try{
        var data=await mongo.selectedDb.collection('hallBook').find().toArray();
        res.send(data);
        
    }catch(err){
        console.log(err)
    }
}

//create
module.exports.createBook=async (req,res,next)=>{
    try{
        var mongoRes=await mongo.selectedDb.collection('hallBook').insert(req.body);
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

//update
module.exports.updateBook=async (req,res,next)=>{
    try{
        var mongoRes=await mongo.selectedDb.collection('hallBook').updateOne({_id:ObjectId(req.params.Id)},{$set:{...req.body}});
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

//delete
module.exports.deleteBook=async (req,res,next)=>{
    try{
        var mongoRes=await mongo.selectedDb.collection('hallBook').remove({_id:ObjectId(req.params.Id)});
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

// //create room
// module.exports.createRoom=async (req,res,next)=>{
//     try{
//         var mongoRes=await mongo.selectedDb.collection('createRoom').insert(req.body);
//         res.send(mongoRes);
//     }catch(err){
//         console.log(err)
//     }
// }

// //create the list of all booking rooms
// module.exports.createBookedRoom=async (req,res,next)=>{
//     try{
//         var mongoRes=await mongo.selectedDb.collection('bookList').insert(req.body);
//         res.send(mongoRes);
//     }catch(err){
//         console.log(err)
//     }
// }

// //create the list of customers booked room
// module.exports.createBookedCustomer=async (req,res,next)=>{
//     try{
//         var mongoRes=await mongo.selectedDb.collection('customerBookList').insert(req.body);
//         res.send(mongoRes);
//     }catch(err){
//         console.log(err)
//     }
// }