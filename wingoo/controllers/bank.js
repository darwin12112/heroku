const Complaints = require("../models/User");
const User = require("../models/User");
const Withdrawl=require("../models/Withdrawl");
const bcrypt = require("bcryptjs");
const Recharge=require("../models/Recharge");
const request = require('request');
var crypto    = require('crypto');
exports.postBank = (req, res, next) => {
    
    const comp=req.body;
    console.log(comp);
    User.findById(req.userFromToken._id,(err,user)=>{
       
        user.bank_card.push(comp);
        user.save();
        return res.status(200).json({message:"Add succesfully"});
    })
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};
exports.deleteBank = (req, res, next) => {
    const key=req.body.key;
    User.findById(req.userFromToken._id,(err,user)=>{
        user.bank_card.splice(key,1);
        
        user.save();
        return res.status(200).json({message:"Remove succesfully"});
    })
    
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};


exports.postWithdrawl = (req, res, next) => {
    

    
    User.findById(req.userFromToken._id,(err,user)=>{
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
            if (isMatch) {
              if(parseFloat(user.budget)<parseFloat(req.body.amount))
                return res.status(401).json({error:"You don't have enough money!"});
              const comp={};
              comp.user=user._id;
              comp.bank=req.body.bank;
              comp.money=req.body.amount;
              user.budget=parseFloat(user.budget)-parseFloat(req.body.amount);
              user.save();
              new Withdrawl(comp).save();
              return res.status(200).json({message:'success! It will be take a few hours to transfer.'});
            } else return res.status(401).json({error:"Password incorrect!"});
          });
        
    })
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};

exports.getAdminWithdrawl = (req, res, next) => {
    

    (async ()=>{
        var withdrawls=await Withdrawl.find({'$or':[{status:'0'},{status:'1'}]});
        const res_data=[];
        for(var i=0;i<withdrawls.length;i++){
            const aa=await User.findById(withdrawls[i].user);
            res_data[i]={};
            res_data[i]._id=withdrawls[i]._id;
            res_data[i].status=withdrawls[i].status;
            res_data[i].userId=aa._id;
            res_data[i].userNickname=aa.nickname;
            res_data[i].userPhone=aa.phone;
            res_data[i].amount=withdrawls[i].money;
            res_data[i].actual_name=aa.bank_card[withdrawls[i].bank].actual_name;
            res_data[i].ifsc_code=aa.bank_card[withdrawls[i].bank].ifsc_code;
            res_data[i].bank_name=aa.bank_card[withdrawls[i].bank].bank_name;
            res_data[i].bank_account=aa.bank_card[withdrawls[i].bank].bank_account;
            res_data[i].state_territory=aa.bank_card[withdrawls[i].bank].state_territory;
            res_data[i].city=aa.bank_card[withdrawls[i].bank].city;
            res_data[i].address=aa.bank_card[withdrawls[i].bank].address;
            res_data[i].mobile_number=aa.bank_card[withdrawls[i].bank].mobile_number;
            res_data[i].email=aa.bank_card[withdrawls[i].bank].email;
            res_data[i].upi_account=aa.bank_card[withdrawls[i].bank].upi_account;
        }
      
        return res.status(200).json({data:res_data});
    })();
    
   
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};

exports.postAdminWithdrawl = (req, res, next) => {
    
    
    (async ()=>{
        var withdrawls=await Withdrawl.findById(req.body.id);
        var user=await User.findById(withdrawls.user);
        // console.log(req.body.status);
        switch(req.body.status){
            case 2:{
                //decline
                // console.log('2');
                user.budget=parseFloat(user.budget)+parseFloat(withdrawls.money);
                withdrawls.status=2;
                await withdrawls.save();
                break;
            }
            case 1:{
                 //approve
                //  console.log('1');
                 withdrawls.status=1;
                 await withdrawls.save();
                 break;
            }
            case 3:{
                //complete
                // console.log('3');
                withdrawls.status=3;
                await withdrawls.save();
                break;
            }
            case 4:{
                //error
                // console.log('4');
                user.budget=parseFloat(user.budget)+parseFloat(withdrawls.money);
                withdrawls.status=4;
                withdrawls.save();
                await user.save();
                break;
            }
        }
        
      
        return res.status(200).json({message:'ok'});
    })();
    
   
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};


exports.getWithdrawlList = (req, res, next) => {
    

    (async ()=>{
        var withdrawls=await Withdrawl.find({user:req.userFromToken});
       
        return res.status(200).json({data:withdrawls});
    })();
    
   
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};

exports.getRechargeList = (req, res, next) => {
    

    (async ()=>{
        var recharges=await Recharge.find({user:req.userFromToken});
       
        return res.status(200).json({data:recharges});
    })();
    
   
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};
exports.postRecharge = (req, res, next) => {    


    
    User.findById(req.userFromToken._id,(err,user)=>{
        const orderID="order"+(new Date()).getTime();
        const comp={};
        comp.user=req.userFromToken._id;
        comp.money=req.body.amount;
        console.log(comp);
        new Recharge(comp).save((err,data)=>{
            var postData = {
                "appId" : process.env.CASHFREE_ID,
                "orderId" : data._id,
                "orderAmount" : req.body.amount,
                "orderNote" : 'test',
                'customerName' : user.nickname,
                "customerEmail" : user.email,
                "customerPhone" : user.phone,
                "returnUrl" : process.env.APP_URL+"api/response-recharge",
                "notifyUrl" : process.env.APP_URL+"api/notify-recharge"
            };
            console.log(process.env.APP_URL+"response-recharge");
            mode = "PROD";
            secretKey = process.env.CASHFREE_KEY;
            // console.log(secretKey);
            sortedkeys = Object.keys(postData);
            url="";
            signatureData = "";
            sortedkeys.sort();
            for (var i = 0; i < sortedkeys.length; i++) {
                k = sortedkeys[i];
                signatureData += k + postData[k];
            }
            var signature = crypto.createHmac('sha256',secretKey).update(signatureData).digest('base64');
            postData['signature'] = signature;
            if (mode == "PROD") {
              url = "https://www.cashfree.com/checkout/post/submit";
            } else {
              url = "https://test.cashfree.com/billpay/checkout/post/submit";
            }
            return res.status(200).json({postData,url});
        });
        
        
        
       
    });
    
	// res.render('request',{postData : JSON.stringify(postData),url : url});
   

   
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};
exports.postResponseRecharge = (req, res, next) => {    


    var postData = {
        "orderId" : req.body.orderId,
        "orderAmount" : req.body.orderAmount,
        "referenceId" : req.body.referenceId,
        "txStatus" : req.body.txStatus,
        "paymentMode" : req.body.paymentMode,
        "txMsg" : req.body.txMsg,
        "txTime" : req.body.txTime
       };
      secretKey = process.env.CASHFREE_KEY;
      signatureData = "";
      for (var key in postData) {
          signatureData +=  postData[key];
      }
      var computedsignature = crypto.createHmac('sha256',secretKey).update(signatureData).digest('base64');
      postData['signature'] = req.body.signature;
      postData['computedsignature'] = computedsignature;
      
      if(req.body.referenceId!='N/A' && req.body.txStatus!="CANCELLED" && postData['signature']==postData['computedsignature']){
           
          Recharge.findById(req.body.orderId,(err,data)=>{
              
              console.log(postData);
            data.status=1;
            data.amount=parseFloat(req.body.orderAmount);
            data.save();
            User.findById(data.user,(err,user)=>{
                user.budget=parseFloat(user.budget)+parseFloat(data.amount);
                user.save((err)=>{                   
                    return res.redirect('/recharge');
                });
            });
            
          });
          
      }else{
        return res.redirect('/recharge');
      }
    

   
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};
exports.getBudget = (req, res, next) => {
    

    (async ()=>{
        var user=await User.findById(req.userFromToken);
       
        return res.status(200).json({budget:user.budget});
    })();
    
   
    // new Complaints(comp).save((err,user)=>{
    //     console.log(err);
    //     return res.status(200).json({message:"Send succesfully"});
    // });

};