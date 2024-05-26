import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tizi1 from "../assets/lila.jpg";
import tizi2 from "../assets/lilo.jpg";
import tizi3 from "../assets/yy.jpg";

const Section = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // contrôle la vitesse du changement d'image
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // définissez-le sur true pour activer le changement automatique
    autoplaySpeed: 5000, // contrôle la vitesse de l'autoplay
  };

  return (
    <section className="section">
      <Slider {...settings}>
        <div>
          <div className="background-container">
            <img src={tizi1} alt="background" className="background-img" />
            <div className="title">
              <h1 className="main-title">Découvrez l'essence de l'immobilier à Tizi Ouzou</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="background-container">
            <img src={tizi2} alt="background" className="background-img" />
            <div className="title">
              <h1 className="main-title">Découvrez l'essence de l'immobilier à Tizi Ouzou</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="background-container">
            <img src={tizi3} alt="background" className="background-img" />
            <div className="title">
              <h1 className="main-title">Découvrez l'essence de l'immobilier à Tizi Ouzou</h1>
            </div>
          </div>
        </div>
      </Slider>

      <style>
        {`
          .section {}
       
          .background-container {
            position: relative; /* Ajout de position relative */
            width: 100%;
            overflow: hidden;
          }

          .background-img {
            width: 100%;
            // filter: blur(5px); /* Pour flouter l'image */
          }

          .title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
          }

          .main-title {
            font-size: 3em;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </section>
  );
}

export default Section;
