const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const AdminModel = require('../models/admin.model');

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.cookie('jwt', '', { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        if (!user) {
          user = await AdminModel.findById(decodedToken.id); 
        }
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        return res.status(401).json('Unauthorized');
      } else {
        let user = await UserModel.findById(decodedToken.id);
        if (!user) {
          user = await AdminModel.findById(decodedToken.id); 
        }
        req.user = user;
        console.log("id:", decodedToken.id);
        next();
      }
    });
  } else {
    console.log('No token');
    return res.status(401).json('Unauthorized');
  }
};

module.exports.authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json('Forbidden');
    }
    next();
  };
};
