 // client/src/components/RegistrationForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { validateUsername, validateEmail, validatePassword } from '../utils/validation';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    // Perform client-side validations
    const newErrors = {};
    if (!validateUsername(formData.username)) {
      newErrors.username = 'Nombre de usuario no válido';
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = 'Correo electrónico no válido';
    }
    if (!validatePassword(formData.password)) {
      newErrors.password = 'La contraseña no cumple con los requisitos de seguridad';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post('/api/register', formData);
      console.log('Registration successful', response.data);
      // Redirect to email confirmation page or login page
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data);
      } else {
        setErrors({ general: 'Error en el registro. Por favor, inténtalo de nuevo.' });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Registrarse</button>
      {errors.general && <p className="error">{errors.general}</p>}
    </form>
  );
};

export default RegistrationForm;