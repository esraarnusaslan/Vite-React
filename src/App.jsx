import './App.css';
import Hello from './Hello';
import Login from './Login';
import Container from './components/Container';
import Product from './components/Product';

function App() {
    //javascipt codes are here

    const productName = 'shirt'
    return (
        //html codes are here
        <div>
           {/*  <Login />
            <Hello /> 

            <Product productName="shoes" productPrice="100"/>
            <Product productName="hat" productPrice="300"/>
            <Product productName={productName} productPrice="100"/>*/}

            <Container>
            <Product />
            </Container>
        </div>
    );
}

export default App;
