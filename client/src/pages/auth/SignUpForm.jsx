import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar'; 
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import avatarImage from '../../assets/avatar.png'; 

const defaultTheme = createTheme();

const SignUp = () => {
  const [nomComplet, setNomComplet] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // État pour le message de succès
  const [emailError, setEmailError] = useState(''); // État pour l'erreur d'e-mail existant
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    const phoneNumberRegex = /^(0[567])\d{8}$/;

    if (!nomComplet) newErrors.nomComplet = "Le nom complet est requis.";
    if (!email) newErrors.email = "L'adresse email est requise.";
    if (!password) {
      newErrors.password = "Le mot de passe est requis.";
    } else if (!passwordRegex.test(password)) {
      newErrors.password = "Le mot de passe doit contenir au moins 8 caractères, une majuscule et un symbole.";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Veuillez confirmer le mot de passe.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "Le numéro de téléphone est requis.";
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Le numéro de téléphone doit contenir 10 chiffres et commencer par 06, 05, ou 07.";
    }
    if (!agreeToTerms) {
      newErrors.agreeToTerms = "Vous devez accepter les conditions générales et la politique de confidentialité.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
        setErrors(formErrors);
        return;
    }

    try {
        const response = await axios.post('http://localhost:5000/api/v1/auth/register', {
            nomComplet,
            email,
            password,
            confirmPassword,
            phoneNumber,
        });

        console.log('Réponse du serveur:', response.data);
        setSuccessMessage('Inscription réussie. Vous pouvez maintenant vous connecter.');
        setEmailError('');
        setTimeout(() => {
            navigate('/sign-in');
        }, 3000);
    } catch (error) {
        console.error('Erreur lors de la soumission du formulaire:', error);
        if (error.response && error.response.status === 409) {
            setEmailError("Cette adresse email est déjà utilisée.");
        }
    }
};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Navbar sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1 }} />
      
        <Box
          sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: 0,
          }}
        >
          {successMessage && (
            <Alert severity="success" sx={{ mb: 3 }}>
              {successMessage}
            </Alert>
          )}
          {emailError && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {emailError}
            </Alert>
          )}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} src={avatarImage} alt="Avatar" />
          <Typography component="h1" variant="h5" fontWeight="bold">
            Inscription
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="nomComplet"
                  required
                  fullWidth
                  id="nomComplet"
                  label="Nom Complet"
                  autoFocus
                  value={nomComplet}
                  onChange={(e) => setNomComplet(e.target.value)}
                  error={!!errors.nomComplet}
                  helperText={errors.nomComplet}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresse Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                  
                />
                {emailError && (
    <Alert severity="error" sx={{ mb: 3 }}>
        {emailError}
    </Alert>
)}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirmer le mot de passe"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Numéro de téléphone"
                  type="tel"
                  id="phoneNumber"
                  autoComplete="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox 
                      value="agreeToTerms" 
                      color="primary" 
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                    />
                  }
                  label="J'accepte les conditions générales et la politique de confidentialité"
                />
                {errors.agreeToTerms && (
                  <Typography variant="body2" color="error">
                    {errors.agreeToTerms}
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#F27438',
                '&:hover': {
                  bgcolor: '#E64A19',
                },
              }}
            >
              S'inscrire
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/sign-in" variant="body2" sx={{ color: 'black', fontWeight: 'bold' }}>
                  {"Vous avez déjà un compte ? Connectez-vous"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
