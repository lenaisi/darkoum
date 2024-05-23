import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Reset from '../assets/Reset password.png'; 
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function NewPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true); 
  const navigate = useNavigate();

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      
      setPasswordsMatch(false);
      console.error('Les mots de passe ne correspondent pas');
      return;
    }
    try {
      console.log('Mot de passe réinitialisé avec succès');
      navigate('/sign-in');
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe ', error);
    }
  };

  return (
    <div>
      <Navbar /> 
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ marginRight: '50px', textAlign: 'center' }}>
          <img src={Reset} alt="Réinitialisation de mot de passe" style={{ maxWidth: '400px' }} />
        </div>
        <div style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '30px',
          width: '500px', 
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Réinitialisation du mot de passe</h2>
          <form onSubmit={handleSubmitPassword}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nouveau mot de passe"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirmez le nouveau mot de passe"
                  variant="outlined"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                  error={!passwordsMatch} 
                  helperText={!passwordsMatch && <span style={{ color: '#E50000', fontWeight: 'bold' }}>Les mots de passe ne correspondent pas</span>} 
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" style={{ backgroundColor: '#F27438' }}>
                  Réinitialiser le mot de passe
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}