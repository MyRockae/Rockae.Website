import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #0D1B2A;
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  
  img {
    width: 100px;
    height: 40px;
    margin-right: 8px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(13, 27, 42, 0.98);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  gap: 1rem;
  transform: translateY(${props => props.isOpen ? '0' : '-100%'});
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SignInButton = styled(NavLink)`
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SignUpButton = styled.a`
  background: #FF6D00;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const BlogNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <>
      <NavContainer>
        <Logo onClick={() => scrollToSection('hero')}>
          <img src={logo} alt="Rockae Logo" />
        </Logo>
        <NavLinks>
          <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</NavLink>
          <SignInButton to="#">Sign in</SignInButton>
          <SignUpButton href="#">Sign up free</SignUpButton>
        </NavLinks>
        <HamburgerButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </HamburgerButton>
      </NavContainer>
      <MobileNavLinks isOpen={isMobileMenuOpen}>
        <NavLink to="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</NavLink>
        <SignInButton to="#">Sign in</SignInButton>
        <SignUpButton href="#">Sign up free</SignUpButton>
      </MobileNavLinks>
    </>
  );
};

export default BlogNav; 