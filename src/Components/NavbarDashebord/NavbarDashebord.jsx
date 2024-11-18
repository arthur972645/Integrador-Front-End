import React from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom'; // Import do react-router-dom
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Image/Imgem-logo.png';

// Estilização usando styled-components
const CenteredNavbar = styled(Navbar)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: 10px;
`;

const StyledNavLink = styled(RouterNavLink)` 
  color: #6c757d;
  font-size: 1.1rem;
  text-decoration: none; /* Remove sublinhado */
  padding: 5px 10px;
  border-radius: 5px;

  &.active {
    color: #343a40; /* Texto claro */
  }

  &:hover {
    color: #343a40;
  }
`;

const Caminhos = styled(Nav)`
  width: 40%;
  display: flex;
  justify-content: space-around;
`;

const CenteredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ImagemLogo = styled.img`
  font-size: 1.5rem;
  margin-right: 20px;
`;

function ColorSchemesExample() {
  const location = useLocation(); 

  return (
    <>
      <CenteredNavbar bg="light" data-bs-theme="light">
        <CenteredContainer>
          <Navbar.Brand href="/">
            <ImagemLogo src={logo} alt="Logo" />
          </Navbar.Brand>
          <Caminhos>
            <StyledNavLink to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>
              Dashboard
            </StyledNavLink>
            <StyledNavLink to="/reservas" className={location.pathname === "/reservas" ? "active" : ""}>
              Reservas
            </StyledNavLink>
            <StyledNavLink to="/financeiro" className={location.pathname === "/financeiro" ? "active" : ""}>
              Financeiro
            </StyledNavLink>
          </Caminhos>
        </CenteredContainer>
      </CenteredNavbar>
    </>
  );
}

export default ColorSchemesExample;
