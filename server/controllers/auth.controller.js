const UserModel = require('../models/user.model');
const { signUpErrors, signInErrors } = require('../utils/error.utils');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');



const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
   return jwt.sign({id}, process.env.TOKEN_SECRET,{
      expiresIn: maxAge
   })
}

module.exports.signUp = async (req, res) => {
  const { nomComplet, email, password, phoneNumber } = req.body;
  console.log(req.body);
  
  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Cette adresse email est déjà utilisée." });
    }

    // Créer un nouvel utilisateur
    const user = await UserModel.create({ nomComplet, email, password, phoneNumber });

    res.status(201).json({ user: user._id });
  } catch (err) {
    console.error('Erreur lors de la création de l\'utilisateur:', err);
    res.status(500).json({ message: "Erreur lors de la création de l'utilisateur. Veuillez réessayer plus tard." });
  }
};

 module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Cet utilisateur n'existe pas." }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Mot de passe incorrect." }] });
    }

    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    console.error("Erreur lors de la soumission du formulaire:", error);
    res.status(500).json({ errors: [{ msg: "Erreur lors de la connexion. Veuillez réessayer plus tard." }] });
  }
};



module.exports.logOut = (req, res) => {
  
   res.cookie('jwt', '',{maxAge: 1});
   res.redirect('/');
   console.log("logoutback");
}



module.exports.resetPassword = async (req, res) => {
   console.log("sur resetpassword");
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.send({ status: "User not existed" });
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "1d" });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nepasrepondre458@gmail.com',
        pass: 'juge ttrw niet uddh'
      }
    });

    const mailOptions = {
      from: 'nepasrepondre458@gmail.com',
      to: user.email,
      subject: 'Reset Password Link',
      text: `${process.env.CLIENT_URL}/NewPassword/${user._id}/${token}`

    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.send({ status: "Error sending email" });
      } else {
        return res.send({ status: "Success" });
      }
    });
  } catch (error) {
    console.error('Error in reset password endpoint: ', error);
    return res.status(500).send({ status: "Internal Server Error" });
  }
};
module.exports.NewPassword = async (req, res) => {
   const {id, token} = req.params
   const {password} = req.body
   console.log("sur newpassword");
   jwt.verify(token, process.env.TOKEN_SECRET  , (err, decoded) => {
       if(err) {
           return res.json({Status: "Error with token"})
       } else {
           bcrypt.hash(password, 10)
           .then(hash => {
               UserModel.findByIdAndUpdate({_id: id}, {password: hash})
               .then(u => res.send({Status: "Success"}))
               .catch(err => res.send({Status: err}))
           })
           .catch(err => res.send({Status: err}))
       }
   })
};
