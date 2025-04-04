import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(250, 250, 250, 0.95);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 50px;
  }

  @media (max-width: 390px) {
    padding: 0 0.75rem;
    height: 45px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #1a202c;
  font-weight: 700;
  font-size: 1.25rem;

  img {
    height: 32px;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    
    img {
      height: 24px;
      margin-right: 0.25rem;
    }
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;
    
    img {
      height: 20px;
      margin-right: 0.2rem;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }

  @media (max-width: 390px) {
    gap: 0.25rem;
  }
`;

const SignInButton = styled.a`
  color: #1a202c;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
`;

const SignUpButton = styled.a`
  background: #1a202c;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: #2d3748;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.375rem 0.75rem;
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
`;

const NavBlog = () => {
  return (
    <NavContainer>
      <Logo to="/">
        <img src={logo} alt="Logo" />
      </Logo>
      <AuthButtons>
        <SignInButton href="https://app.rockae.com/login">Sign in</SignInButton>
        <SignUpButton href="https://app.rockae.com/register">Sign up free</SignUpButton>
      </AuthButtons>
    </NavContainer>
  );
};

export default NavBlog; 