import './App.css';
import Currency from './components/Currency';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
              
            }}
        >
            <Currency />
        </div>
    );
}

export default App;
