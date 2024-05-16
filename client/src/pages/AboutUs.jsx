import React from 'react';
import Navbar from '../components/Navbar1';
import Footer from '../components/footer';



const AboutUs = () => {
  return (
    <div>
      <div className="navbar"> 
        <Navbar />
      </div>

      
      
     

      <div className="space-between-sections" style={styles.space}></div>
      <div className="footer-container"> 
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  space: {
    height: '50px', 
  },
};

export default AboutUs;