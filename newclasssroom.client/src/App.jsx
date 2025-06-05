//import { useState } from 'react';
//import './App.css';
//import Menu from './menu';
/*import { useNavigate } from 'react-router-dom';*/

//function App() {
//    const [usuario, setUsuario] = useState('');
//    const [contrasena, setContrasena] = useState('');
//    const [error, setError] = useState('');
//    const navigate = useNavigate();

//    const manejarLogin = (e) => {
//        e.preventDefault();

//        if (usuario === 'admin' && contrasena === '1234') {
//            setError('');
//            navigate('/menu');
//        } else {
//            setError('Usuario o contraseña incorrectos');
//        }
//    };

//    return (
//        <div className="login-container">
//            <form onSubmit={manejarLogin}>
//                <h2>Iniciar Sesión</h2>

//                <label>Usuario:</label><br />
//                <input
//                    type="text"
//                    value={usuario}
//                    onChange={(e) => setUsuario(e.target.value)}
//                    required
//                /><br />

//                <label>Contraseña:</label><br />
//                <input
//                    type="password"
//                    value={contrasena}
//                    onChange={(e) => setContrasena(e.target.value)}
//                    required
//                /><br />

//                {error && <p style={{ color: 'red' }}>{error}</p>}
//                <br />
//                <button type="submit">Ingresar</button>
//            </form>
//        </div>
//    );
//}

//export default App;

//function App() {
//    const [usuario, setUsuario] = useState('');
//    const [contrasena, setContrasena] = useState('');
//    const [error, setError] = useState('');
//    const [logueado, setLogueado] = useState(false);
//    /*const navigate = useNavigate();*/

//    const manejarLogin = (e) => {
//        e.preventDefault();

//        // Validación simple
//        if (usuario === 'admin' && contrasena === '1234') {
//            setError('');
//            /*navigate('/menu');*/
//            setLogueado(true);
//        } else {
//            setError('Usuario o contraseña incorrectos');
//        }
//    };

//    return (
//        <div className="login-container">
//            {logueado ? (
//                <div>
//                    <h1>Bienvenidos, {usuario}!</h1>
//                    <p>Has iniciado sesion correctamente.</p>
//                </div>
//            ) : (
//                <form onSubmit={manejarLogin}>
//                    <h2>Iniciar Sesion</h2>

//                        <label>Usuario:</label>
//                    <br></br>
//                    <input
//                        type="text"
//                        value={usuario}
//                        onChange={(e) => setUsuario(e.target.value)}
//                        required
//                        />
//                    <br></br>

//                        <label>Contrasena:</label>
//                    <br></br>
//                    <input
//                        type="password"
//                        value={contrasena}
//                        onChange={(e) => setContrasena(e.target.value)}
//                        required
//                    />

//                    {error && <p style={{ color: 'red' }}>{error}</p>}
//                        <br></br>
//                        <br></br>
//                        <button type="submit">Ingresar</button>
//                </form>
//            )}
//        </div>
//    );
//}

//export default App;

import { useState } from 'react';
import './App.css';
import Menu from './menu';

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

    return (
        <div className="login-container">
            {logueado ? (
                <Menu />
            ) : (
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
            )}
        </div>
    );
}

export default App;