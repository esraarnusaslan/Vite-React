import { useState } from 'react';
import './App.css';
import Hello from './Hello';
import Login from './Login';
import Container from './components/Container';
import Product from './components/Product';

function App() {
    //javascipt codes are here

    //const productName = 'shirt';

    const [firstName, setFirstName] = useState('esra');
    const [names, setNames] = useState(['esra', 'volkan', 'tom', 'jerry']);
    const [userInfo, setUserInfo] = useState({ username: 'esra, userId:1' });

    return (
        //html codes are here
        <div>
            {/*  <Login />
            <Hello /> 

            <Product productName="shoes" productPrice="100"/>
            <Product productName="hat" productPrice="300"/>
            <Product productName={productName} productPrice="100"/>

            <Container>
            <Product />
            </Container>
            */}
            {firstName}
            <button onClick={() => setFirstName('esra arnus aslan')}>
                Click
            </button>
            {names.map((name, index) => (
                <div key={index}>{name}</div>
            ))}
            {userInfo.username} {userInfo.userId}
        </div>
    );
}

export default App;
