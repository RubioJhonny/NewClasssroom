import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Menu() {
    const [vistaActual, setVistaActual] = useState('');

    const mostrar = (vista) => {
        setVistaActual(vista);
    };

    return (
        <div>
            <h1>Menú de Registros</h1>

            <div className="menu">
               
                <button onClick={() => mostrar('usuarios')}>Ver Registros de Usuarios</button>
                <button onClick={() => mostrar('docentes')}>Ver Registros de Docentes</button>
                <button onClick={() => mostrar('alumnos')}>Ver Registros de Alumnos</button>
                <button onClick={() => mostrar('reservas')}>Ver Registros de Reservas</button>
            </div>

            <ul>
                <li><Link to="/registro-equipo">Registrar Equipo</Link></li>
                <li><Link to="/espacios">Gestion de Espacios</Link></li>
            </ul>

            {vistaActual && (
                <div className="contenido">
                    <h2>Mostrando: {vistaActual.charAt(0).toUpperCase() + vistaActual.slice(1)}</h2>
                </div>
            )}
        </div>
    );
}

export default Menu;
