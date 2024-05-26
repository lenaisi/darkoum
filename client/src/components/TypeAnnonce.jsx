import React, { useState } from 'react';

const TypeAnnonce = () => {
    const [selectedType, setSelectedType] = useState(''); 
    const handleTypeSelect = (event) => {
        setSelectedType(event.target.value); 
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
