import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: pointer;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;

const SignInButton = styled(NavLink)`
  &:hover {
    color: #000;
  }
`;

const SignUpButton = styled.a`
  background: #2d2d2d;
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

const Nav = () => {
  return (
    <NavContainer>
      <Logo>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Atlas
      </Logo>
      <NavLinks>
        <NavLink href="#">Blog</NavLink>
        <SignInButton href="#">Sign in</SignInButton>
        <SignUpButton href="#">Sign up free</SignUpButton>
      </NavLinks>
    </NavContainer>
  );
};

export default Nav; 