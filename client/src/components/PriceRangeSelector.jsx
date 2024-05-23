import React, { useState } from 'react';

<<<<<<< HEAD
const PriceSelector = ({ onChange }) => {
=======
const PriceSelector = () => {
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
    const [minPrice, setMinPrice] = useState(''); // État pour suivre la valeur de Prix min
    const [maxPrice, setMaxPrice] = useState(''); // État pour suivre la valeur de Prix max

    const handleMinPriceChange = (event) => {
<<<<<<< HEAD
        const minValue = event.target.value;
        setMinPrice(minValue); // Mettre à jour la valeur de Prix min
        onChange(minValue, maxPrice); // Appel de la fonction de rappel avec les nouvelles valeurs de prix
    };

    const handleMaxPriceChange = (event) => {
        const maxValue = event.target.value;
        setMaxPrice(maxValue); // Mettre à jour la valeur de Prix max
        onChange(minPrice, maxValue); // Appel de la fonction de rappel avec les nouvelles valeurs de prix
=======
        setMinPrice(event.target.value); // Mettre à jour la valeur de Prix min
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value); // Mettre à jour la valeur de Prix max
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
    };

    return (
        <div>
            <label htmlFor="min-price">Prix min:</label>
            <input type="number" id="min-price" name="min-price" value={minPrice} onChange={handleMinPriceChange} />
            <label htmlFor="max-price">Prix max:</label>
            <input type="number" id="max-price" name="max-price" value={maxPrice} onChange={handleMaxPriceChange} />
        </div>
    );
};

export default PriceSelector;
