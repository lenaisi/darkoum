import React from 'react';
import { Link } from 'react-router-dom';
import home1 from "../assets/lpp.jpg" 
import home2 from "../assets/tigzirt.jpg"
import home3 from "../assets/villa.jpeg"

const Properties = () => {
  return (
<<<<<<< HEAD
    <div className="properties" style={{ marginTop: '-100px' }}>
      <h2 className="properties-title">Nos Annonces Disponibles</h2>
=======
    <div className="properties" style={{ marginTop: '-0px' }}>
      <h2 className="properties-title">Nos coups de coeur</h2>
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
      <div className="property-list">
        <div className="property-card">
          <Link to="" className="property-link">
            <div className="card-content">
              <img src={home1} alt="home1" className="property-image" />
              <h3 className="property-title">Logement promotionnel public LPP</h3>
<<<<<<< HEAD
              
=======
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
              <p className="property-price">Prix : $1200,000</p>
            </div>
          </Link>
        </div>
        <div className="property-card">
          <Link to="" className="property-link">
            <div className="card-content">
              <img src={home2} alt="home2" className="property-image" />
              <h3 className="property-title">Villa à Tigzirt</h3>
              <p className="property-price">Prix : $300,000</p>
            </div>
          </Link>
        </div>
        <div className="property-card">
          <Link to="" className="property-link">
            <div className="card-content">
              <img src={home3} alt="home3" className="property-image" />
              <h3 className="property-title">Villa à Azazga</h3>
              <p className="property-price">Prix : $300,000</p>
            </div>
          </Link>
        </div>
      </div>
<<<<<<< HEAD
=======
      <div className="view-more-container">
        <Link to="/search" className="view-more-button">Voir plus</Link>
      </div>
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d

      <style>
        {`
          .properties {
            padding: 50px 0;
            text-align: center;
          }

          .properties-title {
            font-size: 2.5em;
            font-weight: bold;
            color: #333;
            margin-bottom: 30px;
          }

          .property-list {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }

          .property-card {
            width: 300px;
            margin-bottom: 20px;
            background-color: #e0e0e0;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
          }

          .property-link {
            text-decoration: none;
            color: inherit;
          }

          .card-content {
            padding: 15px;
          }

          .property-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 10px;
            transition: transform 0.3s ease;
          }

          .property-title {
            font-weight: bold;
            font-size: 1.2em;
            margin-top: 10px;
          }

          .property-card:hover .property-image {
            transform: scale(1.05);
          }
<<<<<<< HEAD
=======

          .view-more-container {
            margin-top: 80px;

          }

          .view-more-button {
            background-color: orange;
            color: white;
            border: none;
            padding: 12px 24px; /* Ajustez la taille du bouton ici */
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            text-decoration: none;
          }

          .view-more-button:hover {
            background-color: darkorange;
          }
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
        `}
      </style>
    </div>
  );
}

export default Properties;
