import React from 'react';
<<<<<<< HEAD
import tizi from "../assets/tizi.jpg";

const Section = () => {
  return (
    <section className="section">
      <div className="mybackground">
        <img src={tizi} alt="background" className="background-img" />
        <div className="title">
          <h1 className="main-title">Découvrez l'essence de l'immobilier à Tizi Ouzou</h1>
        </div>
      </div>

      <style>
        {`
         .section {}
       
          .mybackground {
            position: relative;
            width: 100%;
            overflow: hidden; /* Assure que l'image ne dépasse pas la section */
          }

          .background-img {
            width: 120%; 
            filter: blur(5px); /* Pour flouter l'image */
=======
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
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
          }

          .title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
<<<<<<< HEAD
            color: white; 
          }

          .main-title {
            font-size: 3em; 
            font-weight: bold; 
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
=======
            color: white;
          }

          .main-title {
            font-size: 3em;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
          }
        `}
      </style>
    </section>
  );
}

export default Section;
