<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const AdminModel = require('../models/admin.model');
=======
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
<<<<<<< HEAD
        res.cookie('jwt', '', { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
        if (!user) {
          user = await AdminModel.findById(decodedToken.id); 
        }
=======
        res.cookie("jwt", "", { maxAge: 1 });
        next();
      } else {
        let user = await UserModel.findById(decodedToken.id);
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
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
<<<<<<< HEAD
        return res.status(401).json('Unauthorized');
      } else {
        let user = await UserModel.findById(decodedToken.id);
        if (!user) {
          user = await AdminModel.findById(decodedToken.id); 
        }
        req.user = user;
        console.log("id:", decodedToken.id);
=======
        res.send(200).json('no token')
      } else {
        console.log("id:",decodedToken.id);
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
        next();
      }
    });
  } else {
    console.log('No token');
<<<<<<< HEAD
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
=======
  }
};
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
