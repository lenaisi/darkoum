import React from 'react';
<<<<<<< HEAD
import Navbar1 from '../components/Navbar';
import Footer from '../components/footer';
import Section from '../components/Section';
import Properties from '../components/properties';
import ThreeSixtyViewer from '../components/ThreeSixtyViewer';

=======
import Navbar from '../components/Navbar1';
import Footer from '../components/footer';
import Section from '../components/Section';
import Properties from '../components/properties';
import Banner from '../components/Banner';
import VirtualTour from '../components/VirtualTour'; 
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d

const Home = () => {
  return (
    <div>
      <div className="navbar"> 
<<<<<<< HEAD
        <Navbar1 />
=======
        <Navbar />
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
      </div>
      
     <div className="section">
      <Section/>
     </div>
<<<<<<< HEAD
     
 
     <div className="properties">
      <Properties/>
     </div>
     <div>
      <ThreeSixtyViewer />
    </div>
=======
     <div className="Banner">
      <Banner/>
     </div>

     <div className="properties">
      <Properties/>
     </div>
     
     <div className="virtual-tour">
       <VirtualTour />
     </div>
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d

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