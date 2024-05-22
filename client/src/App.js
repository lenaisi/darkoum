// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInForm from '../src/pages/auth/SignInForm'; 
import SignUpForm from '../src/pages/auth/SignUpForm';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Logout from './pages/auth/logout';
import Search from './pages/search';
import PasswordResetForm from './pages/PasswordResetForm';
import CodeVerificationForm from './pages/CodeVerificationForm'; 
import NewPassword from './pages/NewPassword'; 
import CompteErreur from './pages/erreurPage'; 





function App() {
  return (
    <Router>
      <Routes>
        <Route path='/index.html' element={<Navigate to="/" />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignInForm />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Services' element={<Services/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Search' element={<Search />} />
        <Route path='/ResetPassword' element={<PasswordResetForm />} />
        <Route path='/Verification' element={<CodeVerificationForm />} />
        <Route path="/NewPassword/:id/:token" element={<NewPassword />} />
        <Route path="/erreur" element={<CompteErreur />} />
        <Route path="http://localhost:5000/auth/google" />

        <Route path='/logout' element={<Logout />} />




        
      </Routes>
    </Router>
  );
}

export default App;
