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
  @media (max-width: 768px) {
    height: 80px; 
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    height: 60px;  
  }
`;

const TextoboasVindas = styled(Nav)`
  font-size: 18px;
`;
const SessaoTextoBoasVindas = styled.div`

`

const CenteredContainer = styled(Container)`

  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%; 
  }

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
          <SessaoTextoBoasVindas>
            <TextoboasVindas>Bem-vindo ao gerenciador do quinta de Yapuã</TextoboasVindas>
          </SessaoTextoBoasVindas>
        </CenteredContainer>
      </CenteredNavbar>
    </>
  );
}

export default ColorSchemesExample;
