import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

const base_URL = 'http://localhost:3005';

function App() {
    /*   const getAllUsers = async () => {
        const response = await axios.get(`${base_URL}/users`);
        console.log(response.data);
    };

    const getUserById = async (userId) => {
        const response = await axios.get(`${base_URL}/users/${userId}`);
        console.log(response.data);
    };

       const createUser =  async(newUser) => {
        const response=await axios.post(`${base_URL}/users`, newUser);
        console.log(response.data);
    }  */

    /*   const updateUser = async(userId,updatedUser) => {
        const response=await axios.put(`${base_URL}/users/${userId}`, updatedUser);
        console.log(response.data);
    } */

    /* const deleteUserById = async (userId) => {
        const deletedResponse = await axios.delete(
            `${base_URL}/users/${userId}`
        );
        console.log(deletedResponse.data);
    }; */

    useEffect(() => {
        //getAllUsers();
        //getUserById(1);
        //createUser({username:"esra",password:"esra123"})
        //updateUser(1,{username:"esraarnus123",password:"esraarnus123"})
        //deleteUserById('4ae4');
    }, []);

    return <div></div>;
}

export default App;
