import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [history, setHistory] = useState([]);

    const sayHello = async () => {
        if (name.trim()) {
            setGreeting("Chargement...");
            await new Promise(res => setTimeout(res, 1000)); // simulate delay
            setGreeting(`Bonjour, ${name} !`);
            setHistory((prev) => [...prev, name]);
            setName('');
        } else {
            setGreeting("Tu n'as pas entré de prénom 😢");
        }
    };


    const removeName = (index) => {
        setHistory((prev) => prev.filter((_, i) => i !== index));
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
                            <li key={i}>
                                {n}
                                <button onClick={() => removeName(i)}>🗑️</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default App;
