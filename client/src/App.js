// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInForm from '../src/pages/auth/SignInForm'; 
import SignUpForm from '../src/pages/auth/SignUpForm';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Logout from './pages/auth/logout';
import Search from './pages/search';
import PasswordResetForm from './pages/PasswordResetForm';
import CodeVerificationForm from './pages/CodeVerificationForm'; 
import NewPassword from './pages/NewPassword'; 
import HomeInfo from './pages/HomeInfo';
import VisiteForm from './pages/VisitForm';
import Confirmation from './pages/Confirmation';
import Users from './pages/user';
import DemandeVisit from './pages/DemandeVisit';
import OurHomes from './pages/OurHomes';
import AdminAccueil from './pages/AdminAccueil.jsx'
import AddHomes from './pages/AddHomes.jsx'




function App() {
  // const [isSidebar, setIsSidebar] = useState(true);
  return (
    <Router>
      <Routes>
        <Route path='/index.html' element={<Navigate to="/" />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/home' element={<Home />} />
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
     

        
        

   

        <Route path='/logout' element={<Logout />} />




        
      </Routes>
    </Router>
  );
}


export default App;
