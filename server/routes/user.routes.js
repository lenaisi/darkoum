const UserModel = require('../models/user.model');
const router = require('express').Router();
const { requireAuth, authorizeRoles } = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');



//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logOut);


router.get('/dashboard', requireAuth, authorizeRoles('user'), authController.userDashboard);




module.exports = router;