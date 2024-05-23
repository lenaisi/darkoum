import React from 'react';
import { Link } from 'react-router-dom';


function AdminDashboard() {
    return (
        <div className="admin-panel">
            
            <div className="sidebar">
                <ul>
                    <li style={{ marginTop: '50px' }}><a href="#">Accueil</a></li>
                    <li><a href="#">Utilisateurs</a></li>
                    <li><a href="#">Maisons Disponibles</a></li>
                    <li><a href="#">Demandes de visites</a></li>
                    <li><a href="#">Déconnexion</a></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="content">
              

                {/* Add Homes Button */}
                <button className="add-homes-btn" style={{ marginLeft: '800px' }}>Add Homes</button>
            </div>
            

            {/* Inline Styles */}
            <style>
                {`
                    .admin-panel {
                        display: flex;
                        height: 100vh;
                    }

                    .sidebar {
                        width: 200px;
                        background-color: #000;
                        padding: 20px;
                    }

                    .sidebar ul {
                        list-style-type: none;
                        padding: 0;
                    }

                    .sidebar ul li {
                        margin-bottom: 35px; /* Augmentation de l'espace entre les éléments */
                    }

                    .sidebar ul li a {
                        text-decoration: none;
                        color: #fff; /* Couleur du texte blanc */
                        font-weight: bold;
                    }

                    .content {
                        flex: 1;
                        padding: 20px;
                    }

                    .add-homes-btn {
                        background-color: #F27438; /* Couleur orange F27438 */
                        color: #fff;
                        border: none;
                        padding: 10px 20px;
                        font-size: 16px;
                        border-radius: 5px;
                        cursor: pointer;
                    }

                    .add-homes-btn:hover {
                        background-color: #D95E2B; 
                    
                    }
                `}
            </style>
        </div>
    );
}

export default AdminDashboard;
