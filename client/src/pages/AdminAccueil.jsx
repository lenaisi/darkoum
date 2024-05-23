import React, { useState, useEffect } from 'react';
import Sidebar from '../components/SideBar'; 
import panel from '../assets/Control Panel-cuate.png';


function AdminAccueil() {
    const styles = {
        adminAccueilContainer: {
            display: 'flex',
            height: '100vh',
        },
        mainContent: {
            flex: 1,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerSection: {
            textAlign: 'center',
        },
        headerImage: {
            marginLeft : "150px",
            width: '500px', 
            height: 'auto',
            marginBottom: '20px',
        },
        title: {
            marginTop : "10px",
            fontSize: '24px',
            fontWeight : 'bold'
        },
    };

    return (
        <div style={styles.adminAccueilContainer}>
            <Sidebar />
            <div style={styles.mainContent}>
                <div style={styles.headerSection}>
              
                <h1 style={styles.title}>Effectuez des actions administratives en toute simplicité dans votre Dashboard.</h1>
                    <img src={panel}alt="Description of the image" style={styles.headerImage} />
                    
                </div>
            </div>
        </div>
    );
}

export default AdminAccueil;
