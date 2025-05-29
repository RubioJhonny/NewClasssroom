import { useState } from 'react';
import './App.css';

function App() {
    const [vistaActual, setVistaActual] = useState('');

    const mostrar = (vista) => {
        setVistaActual(vista);
    };

    return (
        <div>
            <h1>Menu de Registros</h1>
            <div className="menu">
                <button onClick={() => mostrar('login')}>Ver Registros de Login</button>
                <button onClick={() => mostrar('usuarios')}>Ver Registros de Usuarios</button>
                <button onClick={() => mostrar('docentes')}>Ver Registros de Docentes</button>
                <button onClick={() => mostrar('alumnos')}>Ver Registros de Alumnos</button>
                <button onClick={() => mostrar('reservas')}>Ver Registros de Reservas</button>
            </div>

            {vistaActual && (
                <div className="contenido">
                    <h2>Mostrando: {vistaActual.charAt(0).toUpperCase() + vistaActual.slice(1)}</h2>
                    {/* Aquí puedes cargar los datos correspondientes a cada sección */}
                </div>
            )}
        </div>
    );
}

export default App;