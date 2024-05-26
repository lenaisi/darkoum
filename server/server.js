const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require("passport")
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const cors = require('cors');
const authroute = require('../server/routes/user.routes');
const formroute = require('../server/routes/form.routes');
const {checkUser, requireAuth} = require ('./middlewares/auth.middleware');
const User = require('./models/user.model')
require('./auth')
const app = express();
const session = require('express-session')

const jwt = require('jsonwebtoken');
const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}


app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
  secret: process.env.TOKEN_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

function isLoggedIn(req,res,next){
    req.user ? next() : res.sendStatus(401)
  }

app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  async (req, res) => {
    const googleUser = req.user; // Récupération de l'utilisateur Google par Passport.js
    console.log("google user : ", googleUser)

    try {
      const existingUser = await User.findOne({ email: googleUser.email });
      
      if (!existingUser) {
        return res.redirect('http://localhost:3000/erreur');
      }

      const token = jwt.sign({ userId: existingUser.id_user }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
      res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000, secure: true });

      res.redirect(`http://localhost:3000/home`);
    } catch (error) {
      console.error('Erreur lors de la création ou de la récupération de l\'utilisateur:', error);
      res.status(500).send('Une erreur est survenue lors de la connexion.');
    }
  }
);



app.get('/auth/google/failure',(req,res) => {
  res.send("something went wrong!")

})

app.get('/auth/protected', isLoggedIn, (req, res) => {
  if (req.user && req.user.emails && req.user.emails.length > 0) {
    let email = req.user.emails[0].value;
    let name = req.user.displayName;
    res.send(`Bonjour ${name}, votre e-mail est : ${email}`);
  } else {
    res.status(400).send('Impossible de récupérer l\'e-mail de l\'utilisateur');
  }
});

app.get('*', checkUser );
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});


// routes
app.use('/api/v1/auth',authroute) ;
app.use('/api/v2/form', formroute);



// server
app.listen(process.env.PORT, () => {
    console.log(`Listenning to port ${process.env.PORT}`);
})