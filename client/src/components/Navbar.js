import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  margin-left: 1rem;
  &:hover {
    color: #007bff;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">MercadoTCG</NavLink>
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/create-listing">Sell</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;