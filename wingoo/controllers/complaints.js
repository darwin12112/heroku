const bcrypt = require("bcryptjs");
const Complaints = require("../models/Complaints");
const jwt = require("jsonwebtoken");
const { Console } = require("console");
exports.getComplaints = (req, res, next) => {
    Complaints.find({user:req.userFromToken._id},(err,data)=>{
       return res.status(200).json({data:data});
    });
    
};

exports.putComplaints = (req, res, next) => {
    Complaints.find({user:req.userFromToken._id},(err,data)=>{
        return res.status(200).json({data:data});
    })

};
exports.postComplaints = (req, res, next) => {
    const comp={};
    comp.user=req.userFromToken._id;
    comp.category=req.body.category;
    comp.period=parseInt(req.body.period);
    comp.whatsapp=req.body.whatsapp;
    comp.content=req.body.content;
    comp.state=0;
    new Complaints(comp).save((err,user)=>{
        // console.log(err);
        return res.status(200).json({message:"Send succesfully"});
    });

};
exports.getComplaintsAdmin = (req, res, next) => {
    Complaints.find({},(err,data)=>{
        return res.status(200).json({data:data});
    });
    
};
exports.postComplaintsAdmin = (req, res, next) => {
   
    Complaints.findById(req.body.id,(err,data)=>{
        // console.log(req.body.reply);
        data.reply=req.body.reply;
        data.status=true;
        data.save((err,user)=>{
            // console.log(err);
            return res.status(200).json({message:"success"});
        });
    });
        

};