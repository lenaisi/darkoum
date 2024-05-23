const AdminModel = require('../models/admin.model');
const FormModel = require('../models/form.model'); 
const FormVisit = require('../models/formVisit.model');
const UserModel = require('../models/user.model');
const { signUpErrors, signInErrors } = require('../utils/error.utils');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const House = require('../models/house.model');



const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
   return jwt.sign({ id }, process.env.TOKEN_SECRET, {
      expiresIn: maxAge
   });
};

module.exports.signUp = async (req, res) => {
    const { nomComplet, email, password, phoneNumber } = req.body;
    
    try {  
      const admin = await AdminModel.create({ nomComplet, email, password, phoneNumber });
      res.status(201).json({ admin: admin._id });
    } catch (err) {
      res.status(200).json(err);
    }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
     const admin = await AdminModel.login(email, password);
     const token = createToken(admin._id);
     res.cookie('jwt', token, { httpOnly: true, maxAge });
     res.status(200).json({ admin: admin._id });
  } catch (err) {
     const errors = signInErrors(err);
     res.status(200).json({ errors });
  }
};

module.exports.logOut = (req, res) => {
   res.cookie('jwt', '', { maxAge: 1 });
   res.redirect('/');
   console.log("logoutback");
};



module.exports.addHouse = async (req, res) => {
    const { title, description, typeAnnonce, typeBien, wilaya, priceMin, priceMax, images } = req.body;
    const adminId = req.body.adminId; 

    try {
        const house = await House.create({
            title,
            description,
            typeAnnonce,
            typeBien,
            wilaya,
            priceMin,
            priceMax,
            images,
            admin: adminId
        });
        res.status(201).json(house);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


module.exports.getHouses = async (req, res) => {
    try {
        const houses = await House.find();
        res.status(200).json(houses);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports.deleteHouse = async (req, res) => {
    const houseId = req.params.id;

    try {
        if (!houseId) {
            return res.status(404).json({ message: 'Maison non trouvée' });
        }

        const house = await House.findByIdAndDelete(houseId);
        

        res.status(200).json({ message: 'Maison supprimée avec succès' });
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.log("error deletion",err);
    }
};


module.exports.getAllForms = async (req, res) => {
   try {
       const forms = await FormModel.find(); 
       res.json(forms);
   } catch (error) {
       console.error('Erreur lors de la récupération des formulaires :', error);
       res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des formulaires' });
   }
};

module.exports.getHousesByForm = async (req, res) => {
   try {
       const formId = req.params.formId;
       const form = await FormModel.findById(formId);
       if (!form) {
           return res.status(404).json({ message: 'Formulaire non trouvé' });
       }
       const houses = await House.find({
           typeAnnonce: form.typeAnnonce,
           typeBien: form.typeBien,
           wilaya: form.wilaya,
           priceMin: { $gte: form.priceMin },
           priceMax: { $lte: form.priceMax }
       });
       res.json(houses);
   } catch (error) {
       console.error('Erreur lors de la récupération des maisons par formulaire :', error);
       res.status(500).json({ message: 'Une erreur est survenue lors de la récupération des maisons' });
   }
};

module.exports.adminDashboard = (req, res) => {
    res.status(200).json({ message: 'Bienvenue sur le tableau de bord administrateur' });
  };
  


  module.exports.getUsers = async (req, res) => {
    try {
       
        const users = await UserModel.find();
        
        res.status(200).json(users);
    } catch (err) {
       
        res.status(500).json({ message: err.message });
    }
};

module.exports.getFormVisits = async (req, res) => {
    try {
        const formVisits = await FormVisit.find();
        res.status(200).json(formVisits);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
