import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const sayHello = () => {
        if (name.trim()) {
            setGreeting(`Bonjour, ${name} !`);
        } else {
            setGreeting("Tu n'as pas entré de prénom 😢");
        }
    };

    return (
        <div className="container">
            <h1>Dis bonjour 👋</h1>
            <input
                type="text"
                placeholder="Ton prénom..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={sayHello}>Dire bonjour</button>
            <p>{greeting}</p>
        </div>
    );
}

export default App;
