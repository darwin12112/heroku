const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    //console.log("token received is: ", token);
    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    req.userFromToken = decoded;
    next();
  } catch (err) {
    //console.log("unauth------ ", err);
    return res.status(401).json("unauth");
  }
};
