<<<<<<< HEAD
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Reset from '../assets/Reset password.png'; 
=======
import React from 'react';
import Reset from '../assets/Mail-amico.svg'; 
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function CodeVerificationForm() {
<<<<<<< HEAD
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const navigate = useNavigate();

  const handleSubmitCode = async (e) => {
    e.preventDefault();
    try {
    
      if (!code) {
        setCodeError('Veuillez entrer le code envoyé par e-mail.');
        return;
      }


      setCodeError('');

    

      navigate('/NewPassword');
    } catch (error) {
      console.error('Erreur lors de la soumission du code ', error);
    }
  };
=======
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d

  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ marginRight: '50px', textAlign: 'center' }}>
          <img src={Reset} alt="Réinitialisation de mot de passe" style={{ maxWidth: '400px' }} />
        </div>
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          width: '500px', 
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Vérifiez votre e-mail !</h2>
          <form onSubmit={handleSubmitCode}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  label="Entrez le code envoyé par e-mail"
                  variant="outlined"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  fullWidth
                  margin="normal"
                  error={!!codeError}
                  helperText={<span style={{ fontWeight: 'bold', color: '#E50000' }}>{codeError}</span>} 
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" style={{ backgroundColor: '#F27438' }}>
                  Valider
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
=======
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center', padding: '0 20px' }}>
          <h2 style={{ marginBottom: '0px', marginTop: '150px' ,color: '#F27438', fontWeight: 'bold'}}>Pour réinitialiser votre mot de passe, veuillez accéder à votre boîte mail. Vous y trouverez un lien sécurisé qui vous permettra de procéder à la réinitialisation de votre mot de passe en toute simplicité.</h2>
        </div>
        <img src={Reset} alt="Réinitialisation de mot de passe" style={{ maxWidth: '400px', margin: 'auto' }} />
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
      </div>
      <Footer /> 
    </div>
  );
}
