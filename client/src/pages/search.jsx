import React, { useState } from 'react';
import Navbar1 from '../components/Navbar';
import TypeAnnonce from '../components/TypeAnnonce';
import PriceRangeSelector from '../components/PriceRangeSelector';
import HouseTypeSelector from '../components/HouseTypeSelector';
import WilayaSelector from '../components/WilayaSelector';
import home from '../assets/home.jpg';
import axios from 'axios';
import Footer from '../components/footer';

const Search = () => {
    const [formData, setFormData] = useState({
        typeAnnonce: '',
        typeBien: '',
        wilaya: '',
        priceMin: '',
        priceMax: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setFormData({
                typeAnnonce: '',
                typeBien: '',
                wilaya: '',
                priceMin: '',
                priceMax: ''
            });
            const response = await axios.post('http://localhost:5000/api/v2/form/create', formData);
            console.log(response.data);

            
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire :', error);
        }
    };
    
    return (
        <div>
            <Navbar1 /> 
            <div style={styles.background}>
                <img src={home} alt="home" style={styles.image} />
                <div style={styles.container}>
                    <h1>  </h1>
                    <form style={styles.form} onSubmit={handleSubmit}> 
                    <div style={styles.formRow}>
                            <div style={styles.formGroup}>
                                <label htmlFor="type-annonce"> </label>
                                <TypeAnnonce value={formData.typeAnnonce} onChange={(value) => setFormData({...formData, typeAnnonce: value})} />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="house-type"></label>
                                <HouseTypeSelector />
                            </div>
                            <div style={styles.formGroup}>
                                <label htmlFor="wilaya"></label>
                                <WilayaSelector />
                            </div>
                        </div>
                        <div style={{ ...styles.formGroup, marginBottom: '30px' }}> 
                            <label htmlFor="price-range"></label>
                            <PriceRangeSelector valueMin={formData.priceMin} valueMax={formData.priceMax} onChange={(min, max) => setFormData({...formData, priceMin: min, priceMax: max})} />
                        </div>
                        <button style={styles.button} type="submit">Rechercher</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Search;

const styles = {
    background: {
        position: 'relative',
        width: '100%',
        height: '100vh',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'blur(5px)', 
    },
    container: {
        position: 'absolute',
        top: '60%', 
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%', 
        maxWidth: '800px', 
        padding: '20px',
        backgroundColor: 'rgba(249, 249, 249, 0.8)', 
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formRow: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
    },
    formGroup: {
        marginRight: '20px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: "#F27438",
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};
