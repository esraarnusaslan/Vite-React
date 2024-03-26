import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

const base_URL = 'http://localhost:3005';

function App() {
    const getAllUsers = async () => {
        const response = await axios.get(`${base_URL}/users`);
        console.log(response.data);
    };

    const getUserById = async (userId) => {
        const response = await axios.get(`${base_URL}/users/${userId}`);
        console.log(response.data);
    };

    useEffect(() => {
        //getAllUsers();
        getUserById(1);
    }, []);

 

    return <div></div>;
}

export default App;
