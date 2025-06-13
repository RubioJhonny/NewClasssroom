import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import Espacios from './Espacios';

function App() {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');
    const [logueado, setLogueado] = useState(false);

    const manejarLogin = (e) => {
        e.preventDefault();

        if (usuario === 'admin' && contrasena === '1234') {
            setError('');
            setLogueado(true);
        } else {
            setError('Usuario o contraseña incorrectos');
        }
    };

    if (!logueado) {
        return (
            <div className="login-container">
                <form onSubmit={manejarLogin}>
                    <h2>Iniciar Sesión</h2>
                    <label>Usuario:</label><br />
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    /><br />
                    <label>Contraseña:</label><br />
                    <input
                        type="password"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    /><br />
                    {error && <p style={{ color: 'red' }}>{error}</p>}<br />
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        );
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/espacios" element={<Espacios />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
