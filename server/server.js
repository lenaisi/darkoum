const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const cors = require('cors');
const authroute = require('../server/routes/user.routes');
const adminroute = require('../server/routes/admin.routes');
const houseroute = require('../server/routes/house.routes');
const formroute = require('../server/routes/form.routes');
const formvisitroute = require('../server/routes/formvisit.routes');
const {checkUser, requireAuth} = require ('./middlewares/auth.middleware');

const app = express();

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

app.get('*', checkUser );
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id)
});


// routes
app.use('/api/v1/auth',authroute) ;
app.use('/api/v1/admin', adminroute); 
app.use('/api/v1/houses', houseroute); 
app.use('/api/v2/form', formroute);
app.use('/api/v3/formvisit', formvisitroute);




// server
app.listen(process.env.PORT, () => {
    console.log(`Listenning to port ${process.env.PORT}`);
})