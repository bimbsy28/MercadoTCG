import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationPage from './pages/RegistrationPage';

// Temporary component for the home page
const HomePage = () => <h1>Bienvenido a MercadoTCG</h1>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registrarse" element={<RegistrationPage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;