// App.js
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInForm from '../src/pages/auth/SignInForm'; 
import SignUpForm from '../src/pages/auth/SignUpForm';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
<<<<<<< HEAD
=======
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
import Logout from './pages/auth/logout';
import Search from './pages/search';
import PasswordResetForm from './pages/PasswordResetForm';
import CodeVerificationForm from './pages/CodeVerificationForm'; 
import NewPassword from './pages/NewPassword'; 
<<<<<<< HEAD
import HomeInfo from './pages/HomeInfo';
import VisiteForm from './pages/VisitForm';
import Confirmation from './pages/Confirmation';
import Users from './pages/user';
import DemandeVisit from './pages/DemandeVisit';
import OurHomes from './pages/OurHomes';
import AdminAccueil from './pages/AdminAccueil.jsx'
import AddHomes from './pages/AddHomes.jsx'
=======
import CompteErreur from './pages/erreurPage'; 

>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d




function App() {
<<<<<<< HEAD
  // const [isSidebar, setIsSidebar] = useState(true);
=======
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
  return (
    <Router>
      <Routes>
        <Route path='/index.html' element={<Navigate to="/" />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/home' element={<Home />} />
<<<<<<< HEAD
        <Route path='/Search' element={<Search />} />
        <Route path='/ResetPassword' element={<PasswordResetForm />} />
        <Route path='/Verification' element={<CodeVerificationForm />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/HomeInfo" element={<HomeInfo/>} />
        <Route path="/visit" element={<VisiteForm />} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/DemandeVisit" element={<DemandeVisit/>} />
        <Route path="/OurHomes" element={<OurHomes/>} />
        <Route path="/Admin" element={<AdminAccueil/>} />
     

        
        

   
=======
        <Route path='/Services' element={<Services/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Search' element={<Search />} />
        <Route path='/ResetPassword' element={<PasswordResetForm />} />
        <Route path='/Verification' element={<CodeVerificationForm />} />
        <Route path="/NewPassword/:id/:token" element={<NewPassword />} />
        <Route path="/erreur" element={<CompteErreur />} />
        <Route path="http://localhost:5000/auth/google" />
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d

        <Route path='/logout' element={<Logout />} />




        
      </Routes>
    </Router>
  );
}

<<<<<<< HEAD

=======
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
export default App;
