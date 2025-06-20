import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [history, setHistory] = useState([]);

    const sayHello = () => {
        if (name.trim()) {
            setGreeting(`Bonjour, ${name} !`);
            setHistory((prev) => [...prev, name]);
            setName('');
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

            {history.length > 0 && (
                <>
                    <h2>Historique</h2>
                    <ul>
                        {history.map((n, i) => (
                            <li key={i}>{n}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default App;
