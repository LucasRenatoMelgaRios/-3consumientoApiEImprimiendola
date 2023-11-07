import React, { useState, useEffect } from 'react';

const ApiPostComponent = () => {

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const apiUrl = 'https://api-carta-virtual.planta-de-la-vida.com/api/loginCliente';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.data);
      } else {
        console.error('Error al realizar la solicitud POST:', response.status);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  };

  console.log(data);
  return (
    <div>
      <h1>Consumir API POST en React.js</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Enviar POST</button>
      </form>
      {data.nombres ?  (
        <div>
          <h2>Respuesta de la API:</h2>
          <ul>
              <li>
                  nombre: {data.nombres}
                  
              </li>
              <li>

                 apellidos: {data.apellidos}
              </li>
              <li>
                email: {data.email}
              </li>
           <li>
            dni: {data.dni}
            </li> 
            <li>

              fecha de nacimiento: {data.fecha_nacimiento}
            </li>
            <li>
              Teléfono: {data.telefono}
            </li>
            
          </ul>
        </div>
      ):""}
    </div>
  );
};

export default ApiPostComponent;