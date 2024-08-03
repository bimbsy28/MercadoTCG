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
    // ... (rest of the handleSubmit logic)
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Nombre de Usuario</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <p className="text-danger mt-1 small">{errors.username}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-danger mt-1 small">{errors.email}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="text-danger mt-1 small">{errors.password}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <p className="text-danger mt-1 small">{errors.confirmPassword}</p>}
      </div>
      <button type="submit" className="btn btn-primary w-100">Registrarse</button>
      {errors.general && <p className="text-danger mt-3 small">{errors.general}</p>}
    </form>
  );
};

export default RegistrationForm;




