const express = require('express');
const router = express.Router();
const { requireAuth, authorizeRoles } = require('../middlewares/auth.middleware');
const adminController = require('../controllers/admin.controller');


// Authentification/Administration
router.post('/signup', adminController.signUp);
router.post('/signin', adminController.signIn);
router.get('/logout', adminController.logOut);

// Gestion des Maisons
router.post('/add', adminController.addHouse);
router.get('/houses', adminController.getHouses);
router.delete('/house/:id', adminController.deleteHouse);


// Gestion des Utilisateurs
router.get('/users', adminController.getUsers);


// Gestion des Formulaires Utilisateurs
router.get('/forms', adminController.getAllForms); 
router.get('/forms/:formId/houses', adminController.getHousesByForm);

router.get('/form-visits', adminController.getFormVisits);


router.get('/dashboard', requireAuth, authorizeRoles('admin'), adminController.adminDashboard);

module.exports = router;
