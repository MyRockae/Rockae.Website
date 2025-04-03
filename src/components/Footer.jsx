import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f1f1f1;
  padding: 4rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const CompanyInfo = styled.div`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Location = styled.div`
  color: #999;
  font-size: 0.85rem;
  margin-top: 2rem;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const LinkGroupTitle = styled.h3`
  color: #333;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CompanyInfo>
          We're a team of current and former students and teachers on a mission to make learning accessible and engaging for everyone.
          <Location>
            © Triangle Labs · LA & NYC
          </Location>
        </CompanyInfo>

        <LinkGroup>
          <LinkGroupTitle>Social</LinkGroupTitle>
          <FooterLink href="#">Discord</FooterLink>
          <FooterLink href="#">TikTok</FooterLink>
          <FooterLink href="#">Twitter</FooterLink>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
        </LinkGroup>

        <LinkGroup>
          <LinkGroupTitle>Product</LinkGroupTitle>
          <FooterLink href="#">Changelog</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
          <FooterLink href="#">iOS App</FooterLink>
          <FooterLink href="#">Android App</FooterLink>
        </LinkGroup>

        <LinkGroup>
          <LinkGroupTitle>Legal</LinkGroupTitle>
          <FooterLink href="#">Resources</FooterLink>
          <FooterLink href="#">Privacy</FooterLink>
          <FooterLink href="#">Terms</FooterLink>
          <FooterLink href="#">Affiliate Program</FooterLink>
          <FooterLink href="#">AI Detector</FooterLink>
        </LinkGroup>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 