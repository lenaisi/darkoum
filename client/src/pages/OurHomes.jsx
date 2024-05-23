import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/SideBar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';

function OurHomes() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/admin/houses')
            .then(response => {
                setHouses(response.data);
                console.table(response.data);
            })
            .catch(error => {
                console.error('Error fetching houses:', error);
            });
    }, []);

    const styles = {
        ourHomesContainer: {
            display: 'flex',
        },
        mainContent: {
            flex: 1,
            padding: '20px',
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px',
        },
        th: {
            border: '1px solid #ddd',
            padding: '8px',
            textAlign: 'left',
        },
        td: {
            border: '1px solid #ddd',
            padding: '8px',
            textAlign: 'left',
        },
        button: {
            marginRight: '5px',
            cursor: 'pointer',
        },
       
    };

    const handleEditClick = (houseId) => {
        // Logic for editing a house
    };

    const handleDeleteClick = (houseId) => {
        axios.delete(`http://localhost:5000/api/v1/admin/house/${houseId}`)
            .then(response => {
                
                setHouses(houses.filter(house => house._id !== houseId));
                console.log('House deleted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error deleting house:', error);
            });
    };

    return (
        <div style={styles.ourHomesContainer}>
            <Sidebar />
            <div style={styles.mainContent}>
                
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Numéro</th>
                            <th style={styles.th}>Titre</th>
                            <th style={styles.th}>Description</th>
                            <th style={styles.th}>Type d'Annonce</th>
                            <th style={styles.th}>Type de Bien</th>
                            <th style={styles.th}>Wilaya</th>
                            <th style={styles.th}>Prix Min</th>
                            <th style={styles.th}>Prix Max</th>
                            <th style={styles.th}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {houses.map((house, index) => (
                            <tr key={house._id}>
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>{house.title}</td>
                                <td style={styles.td}>{house.description}</td>
                                <td style={styles.td}>{house.typeAnnonce}</td>
                                <td style={styles.td}>{house.typeBien}</td>
                                <td style={styles.td}>{house.wilaya}</td>
                                <td style={styles.td}>{house.priceMin}</td>
                                <td style={styles.td}>{house.priceMax}</td>
                                <td style={styles.td}>
                                    <button
                                        style={{ ...styles.button, ...styles.orangeButton }}
                                        onClick={() => handleEditClick(house._id)}
                                    >
                                       <EditIcon style={{ color :"#000000"  }}/>
                                    </button>
                                    <button
                                        style={{ ...styles.button, ...styles.redButton }}
                                        onClick={() => handleDeleteClick(house._id)}
                                    >
                                        <DeleteOutlineIcon  style={{ color :"#FF0000"  }}/> 
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OurHomes;
