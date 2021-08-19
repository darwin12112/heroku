const User=require('../models/User');
module.exports = (req, res, next) => {
  User.findById(req.userFromToken._id)
  .then((user)=>{
    if(user.admin)
      next();
    else
      return res.status(401).json("Not admin");
  }).catch(err=>{
    return res.status(401).json("Not admin");
  })
};
