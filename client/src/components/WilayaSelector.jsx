import React, { useState } from 'react';
import wilayasData from './wilayas.json';

<<<<<<< HEAD
const WilayaSelector = ({ onChange }) => {
    const [selectedWilaya, setSelectedWilaya] = useState('');

    const handleWilayaSelect = (event) => {
        const selectedValue = event.target.value;
        setSelectedWilaya(selectedValue);
        onChange(selectedValue); 
=======
const WilayaSelector = () => {
    const [selectedWilaya, setSelectedWilaya] = useState(''); 
    const handleWilayaSelect = (event) => {
        setSelectedWilaya(event.target.value); 
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
    };

    return (
        <div>
<<<<<<< HEAD
            <select name="wilaya" id="wilaya" value={selectedWilaya} onChange={handleWilayaSelect}>
                <option value="">Wilaya</option>
=======
            
            <select name="wilaya" id="wilaya" value={selectedWilaya} onChange={handleWilayaSelect}>
                <option value=""> Wilaya</option>
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
                {wilayasData.map(wilaya => (
                    <option key={wilaya.code} value={wilaya.name}>{wilaya.name}</option>
                ))}
            </select>
        </div>
    );
};

<<<<<<< HEAD
export default WilayaSelector;
=======
export default WilayaSelector;
>>>>>>> f6edfea166a0d2aa7d4ca4fa19f0bf269a63414d
