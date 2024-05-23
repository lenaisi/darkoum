import React, { useState } from 'react';

<<<<<<< HEAD
const HouseTypeSelector = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onChange(selectedValue); // Appel de la fonction de rappel avec la nouvelle valeur sélectionnée
=======
const HouseTypeSelector = () => {
    const [selectedOption, setSelectedOption] = useState(''); 

    const handleOptionSelect = (event) => {
        setSelectedOption(event.target.value); 
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
    };

    return (
        <div>
            <label htmlFor="house-type"></label>
            <select name="house-type" id="house-type" value={selectedOption} onChange={handleOptionSelect}>
                <option value="">Type de bien</option>
                <option value="villa">Villa</option>
                <option value="appartement">Appartement</option>
                <option value="studio">Studio</option>
<<<<<<< HEAD
=======
              
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
            </select>
        </div>
    );
};

export default HouseTypeSelector;
<<<<<<< HEAD


=======
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
