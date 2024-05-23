import React, { useState } from 'react';

<<<<<<< HEAD
const TypeAnnonce = ({ onChange }) => {
    const [selectedType, setSelectedType] = useState('');

    const handleTypeSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedType(selectedValue);
        onChange(selectedValue); 
=======
const TypeAnnonce = () => {
    const [selectedType, setSelectedType] = useState(''); 
    const handleTypeSelect = (event) => {
        setSelectedType(event.target.value); 
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
    };

    return (
        <div>            
            <select name="ad-type" id="ad-type" value={selectedType} onChange={handleTypeSelect}>
                <option value="">Type d'annonce</option>
                <option value="location">Location</option>
                <option value="vente">Vente</option>
            </select>
        </div>
    );
};

export default TypeAnnonce;
<<<<<<< HEAD

=======
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
