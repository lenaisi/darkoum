import React from 'react';
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom'; 
import logo from "../assets/DARKOUM.png";
import Logout from '../pages/auth/logout';

const Navbar = () => {
    const handleLogout = async () => {
        try {
            await Logout(); 
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
 
        }
    };
    
=======
import { Link } from 'react-router-dom'; 
import logo from "../assets/DARKOUM1.png";

const Navbar1 = () => {
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
    return (
        <nav style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
<<<<<<< HEAD
            height: '80px', 
            backgroundColor: 'white',
            color: 'black',
            padding: '10px 20px', 
=======
            backgroundColor: 'white',
            color: 'black',
            padding: '15px 15px',
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
            zIndex: 1000,
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
        }}>
<<<<<<< HEAD
           <Link to="/">
                <img src={logo} alt="Logo" style={{ marginRight: 20 ,width:100,marginTop:0}} />
            </Link>
=======
            <img src={logo} alt="Logo" style={{ marginRight: 20 , width:100, marginTop:0}} />
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
            <ul style={{ 
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
<<<<<<< HEAD
                <li style={{ marginRight:20, // Réduction de la marge
                    fontWeight: 'bold',
                }}>
                    <Link to="/">Accueil</Link>
                </li>
                <li style={{  marginRight:20, // Réduction de la marge
                    fontWeight: 'bold',
                    marginLeft: 20
                }}>
                    <div id="nos-services">
                    <a href="#nos-services">Nos services</a>
                    </div>
                </li>
                <li style={{ 
                    fontWeight: 'bold',
                    marginLeft: 20
                }}>
                    <a href="#">A propos</a>
                </li>
            </ul>
                      
            <button 
                className="logout-btn" 
                style={{ 
                    backgroundColor: '#F27438',
=======
                <li style={{ marginRight:30, fontWeight: 'bold' }}>
                    <Link to="/Home" style={{ textDecoration: 'none', color: 'black', position: 'relative' }}>
                        Accueil
                        <span style={{ position: 'absolute', bottom: -2, left: 0, width: '100%', height: 2, backgroundColor: 'black', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                    </Link>
                </li>
                <li style={{ marginRight:30, fontWeight: 'bold', marginLeft: 30 }}>
                    <Link to="/Services" style={{ textDecoration: 'none', color: 'black', position: 'relative' }}>
                        Nos services
                        <span style={{ position: 'absolute', bottom: -2, left: 0, width: '100%', height: 2, backgroundColor: 'black', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                    </Link>
                </li>
                <li style={{ fontWeight: 'bold', marginLeft: 30 }}>
                    <Link to="/AboutUs" style={{ textDecoration: 'none', color: 'black', position: 'relative' }}>
                        À propos
                        <span style={{ position: 'absolute', bottom: -2, left: 0, width: '100%', height: 2, backgroundColor: 'black', transform: 'scaleX(0)', transition: 'transform 0.3s ease' }}></span>
                    </Link>
                </li>
            </ul>

            <Link to="/sign-in" style={{ textDecoration: 'none' }}>
                <button className="login-btn" style={{ 
                    backgroundColor: 'darkorange',
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
                    color: 'white',
                    border: 'none',
                    padding: '8px 15px',
                    borderRadius: 5,
                    cursor: 'pointer',
                    fontWeight: 'bold'
<<<<<<< HEAD
                }}
                onClick={handleLogout} // Déclenchement de la déconnexion
            >
                Se déconnecter
            </button>
=======
                }}>Se connecter</button>
            </Link>
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
        </nav>
    );
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar1;
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
