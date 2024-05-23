<<<<<<< HEAD

=======
const FormModel = require('../models/form.model');
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
const router = require('express').Router();
const formController = require ('../controllers/form.controller');




router.post('/create', formController.createForm);
router.get('/', formController.getAllForms);


module.exports = router;
