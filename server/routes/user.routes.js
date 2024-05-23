const UserModel = require('../models/user.model');
const router = require('express').Router();
<<<<<<< HEAD
const { requireAuth, authorizeRoles } = require('../middlewares/auth.middleware');
=======
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
const authController = require('../controllers/auth.controller');



//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logOut);
<<<<<<< HEAD


router.get('/dashboard', requireAuth, authorizeRoles('user'), authController.userDashboard);

=======
router.post("/resetpassword", authController.resetPassword)
router.post("/NewPassword/:id/:token", authController.NewPassword)


>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d



module.exports = router;