import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/SideBar'; 

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/admin/users')
            .then(response => {
                setUsers(response.data);
                console.table(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const styles = {
        usersContainer: {
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
    };

    return (
        <div style={styles.usersContainer}>
            <Sidebar />
            <div style={styles.mainContent}>
                
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Numéro</th>
                            <th style={styles.th}>Nom Complet</th>
                            <th style={styles.th}>Email</th>
                            <th style={styles.th}>Numéro de Téléphone</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                            <tr key={user.id}>
                                <td style={styles.td}>{index + 1}</td>
                                <td style={styles.td}>{user.nomComplet}</td>
                                <td style={styles.td}>{user.email}</td>
                                <td style={styles.td}>{user.phoneNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;