import React, { useState } from 'react';
import Navbar from '../components/Navbar1';
import Footer from '../components/footer';
import videoFile from '../assets/vidi.mp4'; // Assurez-vous que le chemin est correct

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <div className="navbar">
        <Navbar />
      </div>
      
      <div style={styles.videoContainer}>
        <video style={styles.video} autoPlay muted loop>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.textOverlay}>
          <h1
            style={{ ...styles.text, color: isHovered ? 'orange' : 'white', marginTop: '20px' }}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
            A propos de nous 
          </h1>
          <div style={styles.space}></div> {/* Espace entre les deux textes */}
          <h2 style={styles.subText}>Darkoum est bien plus qu'une simple application immobilière. Nous sommes une équipe passionnée, dédiée à révolutionner l'expérience de recherche et d'exploration immobilière à travers la fusion de la technologie et de l'imagination.</h2>
        </div>
      </div>
      
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    height: 'calc(100vh - 80px)', // Adjust the height based on the size of your Navbar and Footer
    overflow: 'hidden', // Ensures content does not overflow
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  text: {
    fontSize: '2rem', // Adjust the font size as needed
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds a shadow for better readability
    margin: 0, // Remove default margin
    cursor: 'pointer', // Change cursor on hover
    transition: 'color 0.3s ease', // Smooth transition for color change
  },
  subText: {
    fontSize: '1.5rem', // Adjust the font size as needed
    fontWeight: 'normal',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds a shadow for better readability
    margin: 0, // Remove default margin
  },
  space: {
    height: '50px', // Espace entre les deux textes
  },
};

export default AboutUs;
