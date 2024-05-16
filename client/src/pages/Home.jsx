import React from 'react';
import Navbar from '../components/Navbar1';
import Footer from '../components/footer';
import Section from '../components/Section';
import Properties from '../components/properties';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <div className="navbar"> 
        <Navbar />
      </div>
      
     <div className="section">
      <Section/>
     </div>
     <div className="Banner">
      <Banner/>
     </div>

     <div className="properties">
      <Properties/>
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

export default Home;