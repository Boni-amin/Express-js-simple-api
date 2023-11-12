const studentsModel = require('../models/studentsModels');

// Create 
exports.InsertStudent=(req,res)=>{
    const reqBody= req.body;
    studentsModel.create(reqBody)
    .then((data) => {
        res.status(201).json({status:"success",data:data})
    })
    .catch((err) => {
        res.status(400).json({status:"fail",data:err})
    })
 };


 // R=Read
 exports.ReadStudent=(req,res)=>{
    const Query={};
    const Projection="Name Roll Class"
    studentsModel.find(Query, Projection)
    .then((data) => {
        res.status(200).json({status:"success",data:data})
    })
    .catch((err) => {
        res.status(400).json({status:"fail",data:err})
    })
 }
 

 // Update
 exports.UpdateStudent=(req,res)=>{
    const id=req.params.id;
    const QUERY={_id:id}
    const reqBody= req.body;
    studentsModel.updateOne(QUERY, reqBody)
    .then((data) => {
        res.status(200).json({status:"success",data:data})
    })
    .catch((err) => {
        res.status(400).json({status:"fail",data:err})
    })
 }

 
 // Delete
 exports.DeleteStudent=(req,res)=>{
    const id=req.params.id;
    const QUERY={_id:id}
    studentsModel.deleteOne(QUERY)
    .then((data) => {
        res.status(200).json({status:"success",data:data})
    })
    .catch((err) => {
        res.status(400).json({status:"fail",data:err})
    })
 }






 


