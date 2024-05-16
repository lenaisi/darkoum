const UserModel = require('../models/user.model');
const router = require('express').Router();
const authController = require('../controllers/auth.controller');



//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logOut);
router.post("/resetpassword", authController.resetPassword)
router.post("/NewPassword/:id/:token", authController.NewPassword)





module.exports = router;