import {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem("history");
        return saved ? JSON.parse(saved) : [];
    });
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        localStorage.setItem("history", JSON.stringify(history));
    }, [history]);
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

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
        <div className={`container ${darkMode ? 'dark' : ''}`}>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
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
