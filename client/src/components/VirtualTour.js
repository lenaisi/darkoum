import React from 'react';
import './VirtualTour.css';

const VirtualTour = () => {
  return (
    <div className="iframe-container">
      <iframe 
        src="https://tourmkr.com/F1y3y0SFtJ/5041178p&323.19h&76.14t" 
        width="100%" 
        height="600" 
        frameBorder="0" 
        style={{ border: 0 }} 
        allowFullScreen
        title="Visite Virtuelle"
      ></iframe>
    </div>
  );
};

export default VirtualTour;