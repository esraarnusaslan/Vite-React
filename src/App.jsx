import { useState, useEffect } from 'react';
import './App.css';
import Hello from './Hello';
import Login from './Login';
import Container from './components/Container';
import Product from './components/Product';

function App() {
    //javascipt codes are here
    //const productName = 'shirt';
    /*  const [firstName, setFirstName] = useState('esra');
    const [names, setNames] = useState(['esra', 'volkan', 'tom', 'jerry']);
    const [userInfo, setUserInfo] = useState({ username: 'esra, userId:1' }); */

    /*   const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('second');

    useEffect(() => {
        console.log('her zaman calisir');
    });

    useEffect(() => {
        console.log('ilk render edildiginde calisir');
    }, []);

    useEffect(() => {
        console.log(
            'ilk render edildiginde ve firstname state degeri degistiginde calisir'
        );
    }, [firstName]);

    useEffect(() => {
        console.log(
            'ilk render edildiginde ve lastname state degeri degistiginde calisir'
        );
    }, [lastName]); */

    const [vize1, setVize1] = useState(0);
    const [vize2, setVize2] = useState(0);

    const ortalamaBul = () => {
        
    }
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
            {/*   {firstName}
            <button onClick={() => setFirstName('esra arnus aslan')}>
                Click
            </button>
            {names.map((name, index) => (
                <div key={index}>{name}</div>
            ))}
            {userInfo.username} {userInfo.userId}

            <div>
                <button onClick={() => setFirstName('esra')}>
                    Adi degistir
                </button>
            </div>

            <div>
                <button onClick={() => setLastName('arnus')}>
                    Soyadi degistir
                </button>
            </div>
             */}

            <div>
                <div>
                    <input
                        type="number"
                        value={vize1}
                        onChange={(e) => setVize1(Number(e.target.value))}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        value={vize2}
                        onChange={(e) => setVize2(Number(e.target.value))}
                    />
                </div>
                <div>
                    <button>Bul</button>
                </div>
            </div>
        </div>
    );
}

export default App;
