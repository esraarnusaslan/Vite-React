import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

const base_URL = 'http://localhost:3005';

function App() {
    const getAllUsers = async () => {
        const response = await axios.get(`${base_URL}/users`);
        console.log(response.data);
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    return <div></div>;
}

export default App;
