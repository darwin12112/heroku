const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
var unirest = require("unirest");
var request = unirest("POST", "https://www.fast2sms.com/dev/bulk");



exports.user_register = (req, res, next) => {
  User.findOne({ phone: req.body.phone }, (err, user) => {
    // If no document is found, user is null
    if (user) {
      const error = "phone already exists!";
      // console.log(error);
      return res.status(400).json({error});
    } else {
      // console.log("----", req.body);
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          const userFields = {};
          userFields.phone = req.body.phone;
          userFields.password = hash;
          userFields.email=req.body.email;
          userFields.recommendationCode = parseInt(Math.random()*1000000);
          User.find({recommendationCode:req.body.recommendationCode},(err,referer)=>{
            
            userFields.refer1=referer.map(ele=>ele._id);
            var tmp=[];
            for(var i=0;i<referer.length;i++){
              const v=referer[i].refer1.filter(ele=>{
                ele=ele.toString();
                if(tmp[0]!=ele)
                return !tmp.includes(ele)}).map(ele=>ele.toString());
              tmp=tmp.concat(v);
            }
            userFields.refer2=tmp;
            const OTP = Math.floor(1000 + Math.random() * 9000);
            request.headers({
              authorization: "6zN08VAJNl781nfO0Qgb58Ou59mHosvfJWsHx5GwdhorabBPwcFY5dNGcXC1"
            });
////////////////////////////////////////////////////////////////
            request.form({
              sender_id: "u4ktrj", // Set your own "sender_id"
              message: "34229", // template id
              language: "english",
              route: "qt", // Transactional Route SMS
              variables: "{#AA#}",
              variables_values: OTP,
              numbers: req.body.phone // Number present in GET request
            });

            request.end(function(res1) {
              if (res1.error){
                console.log(res1.raw_body);
                return res.status(400).json({ error:JSON.parse(res1.raw_body).message });
              }else{
                userFields.otp=OTP;
                userFields.updatedAt=(new Date()).getTime();
                new User(userFields)
                .save()
                .then((user) => {
                  referer.forEach(ele=>{
                    var tmp=ele.refered1;
                    tmp=tmp.concat([user._id]);
                    ele.refered1=tmp;
                    ele.save();
                  })
                  user.refer2.forEach(ele=>{
                    User.findById(ele,(err,referer2)=>{
                      var tmp=referer2.refered2;
                      tmp=tmp.concat([user._id]);
                      referer2.refered2=tmp;
                      referer2.save();
                    })
                  })
                
                  return res.status(200).json({messgae:'ok' });
                })
                .catch((err)=>{
                  return res.status(400).json({ 'error':err });
                });
        ///////////////////////////////////////////////////////////////////////////////      
              }
              
            });
          })

          
        });
      });
    }
  });
};

exports.user_phone = (req, res, next) => {
  // console.log("phone works---- ", req.body);
  //save the number as not verified then send the OTP code
  
  User.findOne({ "phone": req.body.phone }, (err, user) => {
    // If no document is found, user is null
    if (!user) {
      // console.log("number not found ");
      //check if this number is beyond another account
      // if (user.email !== req.userFromToken.email)
        return res.status(400).json({"error":"Phone not found!"});
    }
    const OTP = Math.floor(1000 + Math.random() * 9000);
    request.headers({
      authorization: "6zN08VAJNl781nfO0Qgb58Ou59mHosvfJWsHx5GwdhorabBPwcFY5dNGcXC1"
    });

    request.form({
      sender_id: "u4ktrj", // Set your own "sender_id"
      message: "34229", // template id
      language: "english",
      route: "qt", // Transactional Route SMS
      variables: "{#AA#}",
      variables_values: OTP,
      numbers: req.body.phone // Number present in GET request
    });

    request.end(function(res1) {
      if (res1.error) return res.status(400).json({ error:"error on otp" });
      else{
        user.otp=OTP;
        user.updatedAt=(new Date()).getTime();
        user.save((err)=>{
          return res.status(200).json({messgae:'ok' });
        });
        
      }
      
    });
  });
};

exports.user_phone_change = (req, res, next) => {
  //save the number as not verified then send the OTP code
  User.findById(req.userFromToken._id, (err, user) => {
    if(user.phone!=req.body.phone){
      // console.log(user.phone+ " "+req.body.phone)
      User.findOne({ "phone": req.body.phone }, (err, user1) => {
        // If no document is found, user is null
        if (!user1) {
          const OTP = Math.floor(1000 + Math.random() * 9000);
          request.headers({
            authorization: "6zN08VAJNl781nfO0Qgb58Ou59mHosvfJWsHx5GwdhorabBPwcFY5dNGcXC1"
          });
      
          request.form({
            sender_id: "u4ktrj", // Set your own "sender_id"
            message: "34229", // template id
            language: "english",
            route: "qt", // Transactional Route SMS
            variables: "{#AA#}",
            variables_values: OTP,
            numbers: req.body.phone // Number present in GET request
          });
      
          request.end(function(res1) {
            if (res1.error) return res.status(400).json({ error:"error on otp" });
            else{
              user.phone=req.body.phone;
              user.otp=OTP;
              user.phone_verified=false;
              user.updatedAt=(new Date()).getTime();
              user.save((err)=>{
                return res.status(200).json({messgae:'ok' });
              });
              
            }
            
          });
        }else
        {
          // console.log("number already exists");
          //check if this number is beyond another account
          // if (user.email !== req.userFromToken.email)
            return res.status(400).json({"error":"Phone is already exist!"});
        }
        
      });
    }else{
      const OTP = Math.floor(1000 + Math.random() * 9000);
      request.headers({
        authorization: "6zN08VAJNl781nfO0Qgb58Ou59mHosvfJWsHx5GwdhorabBPwcFY5dNGcXC1"
      });
  
      request.form({
        sender_id: "u4ktrj", // Set your own "sender_id"
        message: "34229", // template id
        language: "english",
        route: "qt", // Transactional Route SMS
        variables: "{#AA#}",
        variables_values: OTP,
        numbers: req.body.phone // Number present in GET request
      });
  
      request.end(function(res1) {
        if (res1.error) return res.status(400).json({ error:"error on otp" });
        else{
          user.otp=OTP;
          user.phone_verified=false;
          user.updatedAt=(new Date()).getTime();
          user.save((err)=>{
            return res.status(200).json({messgae:'ok' });
          });
          
        }
        
      });
    }


  });
  
  
};

exports.user_verify = (req, res, next) => {
  // console.log("verify works----");
  //find the user first

  User.findOne({ phone: req.body.phone }, (err, user) => {
    if (!user || err) return res.status(400).json({error:"something went wrong!"});
    //start verify
    var now=(new Date()).getTime();
    if(now-parseInt(user.updatedAt)>120000)
      return res.status(400).json({error:"time out!"});
    if(user.otp==req.body.otp){
      user.updatedAt=0;
      user.otp='';
      user.phone_verified=true;
      user.save((err)=>{
        const token = jwt.sign(
          {
            phone: user.phone,
            _id: user._id
  
          },
          process.env.AUTH_SECRET,
          {
            expiresIn: "1h",
          }
        );
        userToken = "Bearer " + token;
        //no need to send hashed password to the frontend
        user.password = "";
        return res.status(200).json({ user, userToken });
      });
    }else{
      return res.status(400).json({error:"otp failed!"});
    }
  });
};
exports.user_login = (req, res, next) => {
  // console.log("login works, ->", req.body.phone);
  User.findOne({ phone: req.body.phone }, (err, user) => {
    // If no document is found, user is null
    if (user) {
      // console.log(user.phone_verified);
      if(user.phone_verified==false){
        const OTP = Math.floor(1000 + Math.random() * 9000);
        request.headers({
          authorization: "6zN08VAJNl781nfO0Qgb58Ou59mHosvfJWsHx5GwdhorabBPwcFY5dNGcXC1"
        });

        request.form({
          sender_id: "u4ktrj", // Set your own "sender_id"
          message: "34229", // template id
          language: "english",
          route: "qt", // Transactional Route SMS
          variables: "{#AA#}",
          variables_values: OTP,
          numbers: req.body.phone // Number present in GET request
        });

        request.end(function(res1) {
          // console.log(res1.raw_body);
          if (res1.error) return res.status(400).json({ error:"error on otp" });
          else{
            user.otp=OTP;
            user.updatedAt=(new Date()).getTime();
            user.save((err)=>{
              if(!err){
                return res.status(400).json({phone:user.phone,error:'1' });
              }else{
                return res.status(400).json({ 'error':err });
              }
            });
            
            
          }
          
        });
      }else{
        bcrypt.compare(req.body.password, user.password).then((isMatch) => {
          if (isMatch) {
            const token = jwt.sign(
              {
                phone: user.phone,
                _id: user._id

              },
              process.env.AUTH_SECRET,
              {
                expiresIn: "1h",
              }
            );
            userToken = "Bearer " + token;
            //no need to send hashed password to the frontend
            user.password = "";
            return res.status(200).json({ user, userToken });
          } else return res.status(401).json({error:"Password incorrect!"});
        });
      }
      // if (user.emailVerified != true) {
      //   return res.status(401).json("Email is not verified!");
      // } else {
        
      // }
    } else return res.status(401).json({error:"phone not found!"});
  });
  
};
exports.change_password = (req, res, next) => {
  User.findById(req.userFromToken._id, (err, user) => {
    if(user.phone!=req.body.phone){
      return res.status(400).json({error:"something went wrong!"});
    }
    else{

        var now=(new Date()).getTime();
        if(now-parseInt(user.updatedAt)>120000)
          return res.status(400).json({error:"time out!"});
        if(user.otp==req.body.otp){
          user.updatedAt=0;
          user.otp='';
          user.phone_verified=true;
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
              if (err) throw err;
              user.password=hash;
              user.save((err)=>{
                if(err) return res.status(400).json({error:"DB failed!"});
                const token = jwt.sign(
                  {
                    phone: user.phone,
                    _id: user._id
          
                  },
                  process.env.AUTH_SECRET,
                  {
                    expiresIn: "1h",
                  }
                );
                userToken = "Bearer " + token;
                //no need to send hashed password to the frontend
                user.password = "";
                return res.status(200).json({ user, userToken });
              });
            });
          });
        }else{
          // console.log(user.otp+" "+req.body.otp);
          return res.status(400).json({error:"otp failed!"});
        }
    }
  


  });
};
exports.postNickname = (req, res, next) => {
  User.findById(req.userFromToken._id, (err, user) => {
    user.nickname=req.body.nickname;
    user.save((err)=>{
      res.status(200).json({message:'ok'});
    })
  


  });
};