import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Registrarse</h2>
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;