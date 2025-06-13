import { useState } from 'react';
import axios from 'axios';

const Espacios = () => {
    const [formulario, setFormulario] = useState({
        nombre_espacio: '',
        tipo_espacio: '',
        capacidad: '',
        nivel_piso: '',
        estado_disponible: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/espacios', formulario);
            alert('Espacio registrado correctamente');
            setFormulario({
                nombre_espacio: '',
                tipo_espacio: '',
                capacidad: '',
                nivel_piso: '',
                estado_disponible: ''
            });
        } catch (error) {
            console.error('Error al guardar el espacio:', error);
            alert('Error al guardar el espacio, revisa la consola.');
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '600px' }}>
            <h2 className="mb-4 text-center">Registrar Espacio</h2>
            <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                <div className="mb-3">
                    <label htmlFor="nombre_espacio" className="form-label">Nombre del Espacio</label>
                    <input
                        type="text"
                        id="nombre_espacio"
                        name="nombre_espacio"
                        value={formulario.nombre_espacio}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Ej. Aula Magna"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="tipo_espacio" className="form-label">Tipo de Espacio</label>
                    <select
                        id="tipo_espacio"
                        name="tipo_espacio"
                        value={formulario.tipo_espacio}
                        onChange={handleChange}
                        required
                        className="form-select"
                    >
                        <option value="">-- Selecciona --</option>
                        <option value="Aula">Aula</option>
                        <option value="Sala Audiovisual">Sala Audiovisual</option>
                        <option value="Laboratorio">Laboratorio</option>
                        <option value="Sala de Juntas">Sala de Juntas</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="capacidad" className="form-label">Capacidad</label>
                    <input
                        type="number"
                        id="capacidad"
                        name="capacidad"
                        value={formulario.capacidad}
                        onChange={handleChange}
                        required
                        className="form-control"
                        placeholder="Número de personas"
                        min="1"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="nivel_piso" className="form-label">Nivel del Piso</label>
                    <input
                        type="number"
                        id="nivel_piso"
                        name="nivel_piso"
                        value={formulario.nivel_piso}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Ej. 1, 2, 3..."
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="estado_disponible" className="form-label">Estado Disponible</label>
                    <input
                        type="text"
                        id="estado_disponible"
                        name="estado_disponible"
                        value={formulario.estado_disponible}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Ej. Disponible, Ocupado"
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">Guardar Espacio</button>
            </form>
        </div>
    );
};

export default Espacios;
